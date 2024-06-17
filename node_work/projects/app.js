const express = require('express')
const cookieParser = require('cookie-parser')
const boardRouter = require('./routers/board.js')
const customerRouter = require('./routers/customer.js')
const todoRouter = require('./routers/todo.js')
const fileRouter = require('./routers/file.js')
const cors = require("cors");
const morgan = require('morgan');


const app = express()
const port = 3000


app.use(morgan(':date :method :url :status'));
//method path handler
app.use(cors());
app.use(cookieParser())

const requsetTitme = function(req, res, next){
    req.requsetTitme = Date.now()
    next()
}

app.use(requsetTitme)
//app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/todo', todoRouter)
app.use('/board', boardRouter)
app.use('/customer', customerRouter)
app.use('/file', fileRouter)

app.get('/', (req, res) => {
    console.log(req.cookies)
    res.send('Hello World')
})

app.get('/post', (req,res) => {
    res.send('post world')
})

app.get('/ab?cd', (req,res) => {
    res.send('ab?cd')
})

app.get('/ab+cd', (req,res) => {
    res.send('ab+cd')
})

// app.get(/a/, (req,res) => {
//     res.send('/a/')
// })

app.get(/^insert/, (req,res) =>{
    res.send('/^insert/`')
})

const ex0 = function (req, res, next){
    console.log('첫 번째 콜백함수');
    next();
}
const ex1 = function (req, res, next){
    console.log('두 번째 콜백함수');
    next();
}
const ex2 = function (req, res, next){
    console.log('세 번째 콜백함수');
}

app.get('/examples', [ex0,ex1,ex2]);

app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`)
})