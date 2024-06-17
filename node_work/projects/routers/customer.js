const express = require('express');
const router = express.Router()

const query = require("../mysql")


router.get("/", (req,res) =>{
    query("customerList")
    .then(result=> res.send(result))
});

router.post("/", (req,res) =>{
    console.log(req.body);
    query("customerInsert", req.body)
    .then(result=> res.send(result))
});

router.put("/:id", (req,res) =>{
    query("customerUpdate", req.body.data )
    .then(result=> res.send(result))
});

// router.put("/:id", async (req,res) =>{
//     let result = await query("customerUpdate", [req.body, req.params.id])
//     .then(result=> res.send(result))
// });

router.delete("/:id", (req,res) =>{
    query("customerDelete", req.params.id)
    .then(result=> res.send(result))
});



module.exports = router;