const express = require('express');
const router = express.Router()

const query = require("../mysql")

board = [
    {
        "no": "1",
        "title": "siu",
        "writer": "jung",
        "content": "check"
    },
    {
        "no": "2",
        "title": "siu2",
        "writer": "jung2",
        "content": "check2"
    }
];

// router.get("/", (req, res) => {
//     console.log(new Date(req.requestTime).toLocaleDateString())
//     res.send(board)
// })

// router.get("/:no", (req, res) => {
//     console.log('no: ', req.params.no)
//     const no = req.params.no
//     let result = board.find(ele => ele.no == no);
//     res.send(result)
// })

// router.post("/", (req, res) => {
//     console.log(req.body)
//     board.push(req.body)
//     res.send("board insert 라우트")
// })
// router.put("/:no", (req, res) => {
//     const no = req.params.no;
//     board = board.map(obj => obj.no == no? {...obj, ...req.body} : obj)
//     res.send("board update 라우트")
// })
// router.delete("/:no", (req, res) => {
//     const no = req.params.no;
//     board = board.filter(obj => obj.no != no)
//     res.send("board delete 라우트")
// })


router.get("/", (req,res) => {
    // let page = (Number(req.query.page)-1) * 10
    let p = Number(req.query.page)
    p = (p-1)*10
    query("boardList", p)
    // .then()
    // res.send(board)
    .then(result=> res.send(result))
});

router.get("/:no", (req,res) =>{
    query("boardList", req.params.no)
    .then(result=> res.send(result))
});

const multer = require('multer');
const upload = multer({ dest: 'd:/upload/' });

router.post("/", upload.single("_____"),    (req,res) =>{
    let data = {...req.body};
    //첨부파일이 있으면
    if(null 아니면) {
    data.filename = req.file._____
    data.uploadfilename = _____
    }
    query("boardInsert", data)
    then(result => res.send(result))
});


router.put("/:id", (req,res) =>{
    query("boardUpdate", [req.body,req.params.id] )
    .then(result=> res.send(result))
});

// router.put("/:id", async (req,res) =>{
//     let result = await query("boardUpdate", [req.body, req.params.id])
//     .then(result=> res.send(result))
// });

router.delete("/:id", (req,res) =>{
    query("boardDelete", req.params.id)
    .then(result=> res.send(result))
});



module.exports = router;