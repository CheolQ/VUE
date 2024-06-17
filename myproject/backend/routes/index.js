var express = require('express');
var path = require("path");
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  //db
  // res.render('index', { title: 'Express', username: '홍길동' });
  // res.redirect("/prod") //시작주소에서 /prod를 자동입력
  // res.send("hello");
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
  // res.end("end");

// const filepath = 'D:/upload/동결2.jpg'
// const filename = 'img.jpg';  
// res.setHeader('Content-Disposition', `attachment; filename=${filename}`); // 이게 핵심 
// res.sendFile(filepath);
});

router.get('/prod', function(req, res, next) {
  let data = [ {no:1, name:'키보드', price:1000},
                    {no:2, name:'마우스', price:3000},
                    {no:3, name:'본체', price:5000},
                  ]
  res.render('productList', {list: data})
})

module.exports = router;
