const fs = require('fs')
//비동기
fs.readFile('./process.js', 'utf-8', (err, data) =>{
    if(err){
        throw err;
    }
    // console.log(data)
})

console.log("1. start")


// 동기
const text = fs.readFileSync('./path.js','utf-8')
// console.log(text)

// 파일출력
let data = "파일 쓰기 테스트"
fs.writeFile('./temp.txt', data,'utf-8', (err) =>{
    if(err){
        throw err
    }
    console.log('비동기적 파일쓰기 완료')
})
fs.writeFileSync('./temp2.txt',data,'utf-8')
console.log('비동기적 파일쓰기 완료2')