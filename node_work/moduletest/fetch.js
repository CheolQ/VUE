const axios = require('axios');
let url = "http://localhost:3000/posts";

const data = { "id": "5", "title": "test11"}

axiosdel(); // 호이스팅(끌어올리기)

function fetchdel(){
    fetch(url+"/5", {
        method: "delete"
    })
}
function axiosdel(){
    axios.delete(url+"/5").then(json => console.log(json.data))
}

function fetchput(){
    fetch(url+"/5", {
        method: "put",
        headers : {"content-type" : "application/json; charset=UTF-8"},
        body : JSON.stringify(data)
    })
}
function axiosput(){
    axios.put(url+"/5", data).then(json => console.log(json.data))
}

function fetchpost(){
    fetch(url, {
        method: "post",
        headers : {"content-type" : "application/json; charset=UTF-8"},
        body : JSON.stringify(data)
    })
}
function axiospost(){
    axios.post(url, data).then(json => console.log(json.data))
}

//fetch get
function getfetch(){
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}
//axios get
function getaxios(){
    axios.get(url)
    .then(json => console.log(json.data))
}