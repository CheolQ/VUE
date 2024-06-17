<!-- <style>
    div {
        width:200px;
        margin:auto;
    }

    input{
        margin:5px;
    }
</style> -->
<template>
    <div v-if="account">
        {{ account.userid }}
        <button type="button" @click="logoutEvt">로그아웃</button>
    </div>
    <div v-else>
        <input v-model="form.userid"    placeholder="id">
        <input v-model="form.userpw" placeholder="pw">
        <button type="button"
            @click="loginEvt">로그인</button>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data(){
            return { form: {userid:'', userpw:''},
            }
        },
        computed:{
            account(){
            return this.$store.state.user.userid;
            }
        },
        created(){
            axios.get("/api/account")
            .then((result)=>{
               this.$store.commit('user', result.data);
            })
            .catch(()=>{console.log('로그인 필요')});
        },
        methods :{
            loginEvt(){
                axios.post("/api/login",  this.form)
                // 브라우저
                .then((result) => {
                    this.$store.commit('user', result.data);
                    alert('로그인 성공')
                })
                .catch((err) => {
                    console.log(err);
                    alert('로그인 실패')
                })
            },logoutEvt(){
                axios.post("/api/logout", this.form)
                .then(() => {
                    this.$store.commit('user', '');
                })
            }
        }
    }
</script>