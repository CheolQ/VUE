<template>
    <button @click="sendMessage">클릭</button>
</template>
<script>
export default {
    data(){
        return { msg: '부모에게 이벤트 전달' }
    },
    mounted(){
        // this.$emit('send-message', this.msg);
    },
    methods: {
        sendMessage(){
            this.$emit('send-message', this.msg + "!!!");
        }
    }
}
</script>