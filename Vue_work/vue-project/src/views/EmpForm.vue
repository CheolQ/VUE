<template>

    <div>
        <h1>사원등록</h1>
        <div>사번<input v-model="emp.emplyee_id"></div>
        <div>first_name<input v-model="emp.first_name"></div>
        <div>last_name<input v-model="emp.last_name"></div>
        <div>email<input v-model="emp.email"></div>
        <div>hire_date<input v-model="emp.hire_date"></div>
        <div>job_id: <select v-model="emp.job_id">
            <option v-for="j in jobs" :value="job.job_id" v-text="job.job_title"></option>
        </select></div>
        <button @click="addHandler">등록</button>
    </div>
</template>
<script>

export default {
    data() { return {
        emp : { employee_id : 100, first_name : '', last_name : '', email : '', hire_date : '', job_id : ''},
        jobs :[]
    }; },
    created() { 
        axiox.get(url).then(json=> this.jobs = json.data.jobs)
    },
    methods: {
        async addHandler(){
        await axios.post("/empInsert", emp)
        this.$router.push('/emp')
        
        //목록으로 이동($router.push("___"))
    }
    }
}
</script>
<style></style>

