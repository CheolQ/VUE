const template = /*html*/`
<div>
userId<input v-model="todos.userId"> 
title<input v-model="todos.title"> 
completed<input v-model="todos.completed"> 
<button @click="add">등록</button>
</div>
<table class="table table-striped table-hover">
<thead>
    <tr>
        <th>userId</th><th>id</th><th>title</th><th>completed</th>
    </tr>
</thead>
<tbody>
    <tr v-for="todo in todos">
        <td>{{todo.userId}}</td>
        <td>{{todo.id}}</td>
        <td>{{todo.title}}</td>
        <td>{{todo.completed}}</td>
        <td><button @click="del(todo.id)">삭제</button></td>
        <td><button @click="edit(todo.title)">수정</button></td>
    </tr>
</tbody>
</table>
`;

const url = 'https://jsonplaceholder.typicode.com/todos';

export default {
    template,
    data() { return { todos:[ ], todo:{} }  },
    created() { 
        axios.get(url)
        .then(json => this.todos = json.data )
    },
    methods : {
        add (){
            // console.log(this.post);
            // alert(JSON.stringify(this.post))
            axios.todo(url, this.todo)
            .then(json => this.todos.push(json.data))
        },
        del (id){
            axios.delete(`${url}/${id}`) //  (url + "/" + id) 이걸로 써도됨
            .then( json => {
                let data = this.todos.filter( a => a.id != id )
                this.todos = data;
            } );
        },
        // edit (title){
        //     axios.()
        //     then.( json =>{

        //     });
        // }
        
    },
}