<template>
    <div>게시판</div>
    <table>
        <tr :key="idx" v-for="(bo, idx) in boards">
            <td>{{ bo.no }}</td>
            <td>{{ bo.title }}</td>
            <td>{{ bo.writer }}</td>
            <td>{{ bo.content }}</td>
            <td>{{ bo.filename }}</td>
            <td>{{ bo.uploadfilename }}</td>
        </tr>
    </table>
    <PagingComponent v-bind="page" @go-page="goPage" />
    <button type="button" @click="addBoard">글쓰기</button>
</template>
<script>
    import axios from 'axios';
    import PagingComponent from "@/components/PagingComponent.vue"
    import PageMixin from '../mixin';

    export default {
        mixins: [PageMixin],
        components: { PagingComponent },
        data() {
            return {
                boards: [],
                board: {},
                page: {},
                pageUnit: 10,
            }
        },
        created() {
            this.goPage(1);
        },
        methods : {
            async goPage(page){
            let pageUnit = this.pageUnit;
            let result = await axios.get(`/api/board?pageUnit=${pageUnit}&page=${page}`);
            this.boards = result.data.list;
            this.page = this.pageCalc(page, result.data.count, 10, pageUnit);
            console.log(this.page);
             },
             addBoard(){
             },
        }
    }
</script>