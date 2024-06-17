//비동기, 동기
//동기식으로 하려면 async , await 를 걸어준다
async function callAPI() {
    let post = await fetch('https://jsonplaceholder.typicode.com/posts/1')
                            .then( res => res.json() )
                            
    console.log(post.userId);

    console.log("fetch 호출");
}

callAPI();