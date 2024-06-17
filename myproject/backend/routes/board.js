const express = require('express');
const router = express.Router();
const multer = require("multer");
const query = require('../mysql/index');
const { off } = require('../app');
const upload = multer({ dset: "d:/upload/" });


router.post("/", upload.single(""), (req, res) => {
    let data = {...req.body};
    // 첨부파일이 있으면
    if(req.body.filename != null) {
        data.filename = req.file.filename;
        data.uploadfilename = req.file.uploadfilename;
    }
    query("boardInsert", data)
        .then(result => res.send(result))
})
// let no = 2;
board = [{
    no : 1,
    title: 'm', 
    writer: 'e', 
    content: 'r' 
},
{   
    no : 2,
    title: 'l', 
    writer: 'u', 
    content: 'c' 
}
];

router.get('/', async (req, res) => {
    let page = Number(req.query.page)
    let pageUnit = Number(req.query.pageUnit);

    if(!page) { page = 1; }
    if(!pageUnit) { pageUnit = 10; }
    console.log('page-----', pageUnit);
    let offset = (page-1)*pageUnit;
    let list = await query("boardList", [offset, pageUnit]);

    let count = await query("boardCount");
    count = count[0].cnt;
    res.send({list, count})
});

router.get('/:no', (req, res) => {
    query("boardGet", req.params.no)
    .then(result => res.send(result));
});

router.post('/', (req, res) => {
    query("boardInsert", req.body)
    .then(result => res.send(result));
});

router.put('/:no', (req, res) => {
    query("boardUpdate", [req.body, req.params.no])
    .then(result => res.send(result));       
});

router.delete('/:no', (req, res) => {
    query("boardDelete", req.params.no)
    .then(result => res.send(result));
});

module.exports = router;