<template>
    <h1>{{ menuno }} {{ title }}</h1>
    <h3>store count {{  this.$store.state.count }}</h3>
</template>
<script>
    export default {
        props : {'title' : {
            type : String,
            default : '페이지 제목입니다.' 
        }, 'menuno' : {
            type : Number,
            default : 1
        } }
    }
</script>
