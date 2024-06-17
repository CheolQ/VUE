const template = /*html*/ `
    <div>
        userId<input v-model="post.userId"> 
        title<input v-model="post.title"> 
        body<input v-model="post.body"> 
        <button @click="add">등록</button>
    </div>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>userId</th><th>id</th><th>title</th><th>body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts">
                <td>{{post.userId}}</td>
                <td>{{post.id}}</td>
                <td>{{post.title}}</td>
                <td>{{post.body}}</td>
                <td><button @click="del(post.id)">삭제</button></td>
            </tr>
        </tbody>
    </table>
`;
const url = 'https://jsonplaceholder.typicode.com/posts';

export default {
    template,
    data() { return { posts:[ ], post:{} }  },
    created() { 
        axios.get(url)
        .then(json => this.posts = json.data )
    },
    methods : {
        add (){
            // console.log(this.post);
            // alert(JSON.stringify(this.post))
            axios.post(url, this.post)
            .then(json => this.posts.push(json.data))
        },
        del (id){
            axios.delete(`${url}/${id}`) //  (url + "/" + id) 이걸로 써도됨
            .then( json => {
                let data = this.posts.filter( a => a.id != id )
                this.posts = data;
            } );
        }
        
    },
}