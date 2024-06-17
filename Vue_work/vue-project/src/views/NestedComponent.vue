<template>
    <div>
        <PageTitle></PageTitle>
        <PageTitle v-bind:title="부모한테 받은 타이틀"></PageTitle>
        <page-title title="서버 타이틀"></page-title>
        <hr>
        <blog-Comp :id="blog.id" title="blog.title"/>
        <hr>
        <BlogComp/>
        <h1>중첩 컴포넌트</h1>
    </div>
</template>
<script>
import PageTitle from "../components/PageTitle";
import BlogComp from "../components/BlogComp.vue";
export default {
    components: {PageTitle,BlogComp},
    data() { return {
        mytitle : '동적으로 전달 타이틀',
        blog : { id:3, title : 'post1' }
    }; },
    created(){},
    methods: {},
}
</script>
<style></style>