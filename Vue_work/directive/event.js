const template = /* html */ `
<select v-model="selValue" class="form-control mb-3" v-on:change="changeSelect">
    <option value="">도시선택</option>
    <option v-for="c in cities" :value="c.value">{{c.text}}</option>
</select>
<input @keyup.enter="doSomeing" v-model="firstName">
<input @click.ctrl="doSomeing" v-model="lastName">
<div>watch : {{fullName}}</div>
<div>computed : {{computedFullName}}</div>
`

export default {
    template,
    data() { return {
        selValue : '21',
        cities : [    {value:'02', text:'서울'},
                        {value:'21', text:'부산'}, 
                        {value:'064', text:'제주'} ],
        firstName : '길동',
        lastName : '홍',
        fullName : ''
    }},

    watch : {
        firstName(){ this.fullName = this.firstName + " " + this.lastName },
        lastName(){ this.fullName = this.firstName + " " + this.lastName },
    },
    computed : {
        computedFullName() { return this.firstName + " " + this.lastName }
    },
    methods : {
        changeSelect(){
            const result = this.cities.find( a => this.selvalue == a.value );
            // alert(this.selValue)
            alert(result.text)
        },
        doSomeing(){
            alert("엔터")
        },
        doSomeing(){
            alert("컨트롤")
        }
    }
}