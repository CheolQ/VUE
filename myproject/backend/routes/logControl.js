const express = require('express')
const router = express.Router();

const members = [
    { userid: "user1", userpw: "1111" },
    { userid: "user2", userpw: "2222" },
    { userid: "user3", userpw: "3333" },
  ];

router.post("/login", (req, res) => {
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    // 터미널
    const member = members.find(a=>a.userid==userid && a.userpw==userpw)
    console.log('=====',member);
    if(member) {
        // const options = {
        //     domain: 'localhost',
        //     path: "/",
        //    // maxAge: 10000, //쿠키유효시간
        //     httpOnly: true,
        // }
        // res.cookie("account", JSON.stringify(member), options);
        req.session.userid = userid; // 세션에 사용자 이메일 정보 저장
        req.session.is_logined = true; // 세션에 로그인 여부 저장
        req.session.save(err => { // 세션 저장
            if(err) throw err;
            res.send(member)
        });
        } else{
        res.send(401);
    }
  });

  router.post('/logout', (req, res) => {
      // res.clearCookie("account");
      req.session.destroy();
      res.send(200);
    })
  
    router.get("/account", (req,res) => {
        // if(req.cookies && req.cookies.account){
        console.log(req.session.is_logined);
        if(req.session.is_logined){
            const member = JSON.parse({userid : req.session.userid});
            return res.send(member)
        }
        res.send(401);
      })


module.exports = router;