<style>
    table {
        margin:auto;
    }
</style>
<template>
    <div>고객관리</div>
    <div class="row">
        <div class="col-md-12 col-lg-7 border p-3">
            <select v-model="pageUnit" @change="goPage(1)">
            <option>2</option>
            <option>5</option>
            <option>10</option>
        </select>
        <table class="table splite-table table-hober">
            <tr :key="idx" v-for="(cus, idx) in customers" @click="updateFormHandler(cus)">
                <td>{{ cus.id}}</td>
                <td>{{ cus.name}}</td>
                <td>{{ cus.email}}</td>
                <td>{{ cus.phone}}</td>
                <td>{{ cus.address}}</td>
            </tr>
        </table>
        </div>
        <div class="col-md-12 col-lg-5 border">
            <NewCustomer :customerdata="customer" @go-page="goPage" ></NewCustomer>
        </div>
    </div>
    <PagingComponent v-bind="page" @go-page="goPage" />

   
</template>
<script>
    import axios from 'axios';
    import PagingComponent from "@/components/PagingComponent.vue"
    import PageMixin from '../mixin';
    import NewCustomer from './NewCustomer.vue';

    export default {
         mixins: [PageMixin],
         components:{ PagingComponent, NewCustomer },
    data(){ return {
        customers: [],
        customer: {},
        page : {},
        pageUnit : 20,
    }; },
    created () {
        this.goPage(1);
    },
    methods : {
        async goPage(page){
            let pageUnit = this.pageUnit;
            let result = await axios.get(`/api/customer?pageUnit=${pageUnit}&page=${page}`);
            this.customers = result.data.list;
            this.page = this.pageCalc(page, result.data.count, 10, pageUnit);
            console.log(this.page);
    },
        updateFormHandler(customer) {
            this.customer = customer;
        }
      }
    }
</script>
