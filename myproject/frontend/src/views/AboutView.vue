<template>
  <PageTitle/>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="form.title">
    <input type="file" ref="file" v-on:change="onChagneFileUpload()">
    <button v-on:click="submitForm()">Upload</button>
  </div>
</template>
<script>
import PageTitle from '@/components/PageTitle.vue' 
export default {
  data(){ return { form: {title:''}, file: ''}},
  methods: {
    submitForm(){
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('title', this.form.title);
      this.axios.post("http://localhost:8000/api/board", formData,
          { headers: { "Content-Type": "multipart/form-data"} }
      ).then((data) => console.log(data.data) )
    }
  },onChagneFileUpload(){
    this.file = this.$refs.file.files[0];
  }
  
}
</script>
