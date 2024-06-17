const mysql = require('mysql2');
const sql = require("./sql");
require('dotenv').config({path:'mysql/.env'});

const conn = { //mysql 접속설정
    connectionLimit : process.env.MYSQL_LIMIT,
    host: process.env.MYSQL_HOST,  // localhost
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
};  
const pool = mysql.createPool(conn);

// Pool.query( 쿼리, 파라미터, 콜백함수)
function query( alias, values ){
    return new Promise( (resolve, reject)    =>   pool.query( sql[alias], values, function(err, result){ 
        if(err) {
            console.log(err);
            reject({err});
        }
        else resolve(result)
        })
    )
}

module.exports = query;

// query("customerList", [])
// .then(result => console.log(result));
