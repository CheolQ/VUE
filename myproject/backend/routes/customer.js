const express = require('express');
const router = express.Router();
const query = require('../mysql/index');
const { customerCount } = require('../mysql/customerSql');

router.get('/', async (req, res) => {
    // parseint number 차이 parseint = null check x,
    let page = Number(req.query.page);
    let pageUnit = Number(req.query.pageUnit);

    if(!page) { page = 1; }
    if(!pageUnit) { pageUnit = 10; }

    let offset = (page-1)*pageUnit;

    let list = await query("customerList", [offset, pageUnit]);
    let count = await query("customerCount");
    count = count[0].cnt;
    res.send({list, count})
});
// router.get('/{}', (req, res) => {});
router.post('/', (req, res) => {
    query("customerInsert", req.body)
    .then(result=> res.send(result));
});
router.put('/:id', (req, res) => {
    query("customerUpdate", [req.body, req.params.id])
    .then(result=> res.send(result));
    // let result = await query("customerUpdate", [req.body, req.params.id])
    // res.send(result);
});
router.delete('/:id', (req, res) => {
    query("customerDelete", req.params.id)
    .then(result=> res.send(result));
});

module.exports = router;