const express = require('express');
const router = express.Router()

const query = require("../mysql")


router.get("/", (req,res) =>{
    query("todoList")
    .then(result=> res.send(result))
});

router.post("/", (req,res) =>{
    console.log(req.body);
    query("todoInsert", req.body)
    .then(result=> res.send(result))
});

router.put("/:id", (req,res) =>{
    query("todoUpdate", req.body.data )
    .then(result=> res.send(result))
});

// router.put("/:id", async (req,res) =>{
//     let result = await query("todoUpdate", [req.body, req.params.id])
//     .then(result=> res.send(result))
// });

router.delete("/:id", (req,res) =>{
    query("todoDelete", req.params.id)
    .then(result=> res.send(result))
});

module.exports = router;