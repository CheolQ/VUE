const mysql  = require('mysql2'); // mysql 모듈로드
const conn = { //mysql 접속설정
    connectionLimit : 10,
    host: '127.0.0.1'   , // localhost
    port: '3306',
    user: 'hr',
    password: 'hr',
    database: 'test'
};  

const pool = mysql.createPool(conn);
let name = '홍길동';
let email = 'c@cc.c';
let phone = '111-1111';
let adress = '대구 북구';
// const sql = "insert into customers(name, email, phone,adress) values (?,?,?,?)";
const sql = "insert into customers set ? ";
const params = { name : '김기자', email: 'as@d.com', phone: '333-333', address:'서울'}
pool.query( sql, params , function(err, result ) {
    if(err) console.log(err)
    console.log(result);
})