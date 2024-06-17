<style>
    div {
        padding: 5px;
    }
</style>
<template>
    <div>
        <h1>고객등록</h1>
        <div>id<input v-model="customer.id" readonly></div>
        <div>name<input v-model="customer.name"></div>
        <div>email<input v-model="customer.email"></div>
        <div>phone<input v-model="customer.phone"></div>
        <div>address<input v-model="customer.address"></div>
        <!-- <div>job_id: <select v-model="emp.job_id">
            <option v-for="j in jobs" :value="j.job_id" v-text="j.job_title"></option>
        </select></div> -->
        <button @click="addHandler">등록</button>
        <button @click="modifyHandler">수정</button>
        <button @click="resetHandler">초기화</button>
        <button @click="delHandler">삭제</button>
    </div>
</template>
<script>
import axios from 'axios';

    export default {
        props : {
            customerdata : { type:Object }
        },
        data(){ 
            return { customer: { ...this.customerdata} }; 
        },
        watch :{
            customerdata(newQuestion, oldQuestion){
                this.customer = {...newQuestion};
            }
        },
        created  () {},
        methods : {
        addHandler(){
            if(! this.customer.name){
                alert('이름을 입력해주세요!')
                return false;
            }
            else if(! this.customer.email ){
                alert('이메일을 입력해주세요!')
                return false;
            }
            axios.post("/api/customer", this.customer)
            this.$emit("go-page", 1)
        },
        modifyHandler(){
            axios.put(`/api/customer/${this.customer.id}`, this.customer)
            .then(res => {
                this.$emit("go-page", 1)
            }); 
        },
        resetHandler(){
            this.customer= '';
        },
        delHandler(){
            axios.delete(`/api/customer/${this.customer.id}`)
            .then(res => {
                this.$emit("go-page", 1)
            }); 

        }
    }
}
</script>
<style>
</style>