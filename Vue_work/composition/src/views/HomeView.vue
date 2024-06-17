<template>
  <div class="home">
    <Props title="props전달" 
               subject="subject전달"></Props>
               <hr>
    <Props title="타이틀전달" 
               subject="subject전달"></Props>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import {Provide} from 'vue';

export default {
  name: "HomeView",
  components: { Provide },
  setup() {
    provide{'title' , 'vue.js 프로젝트'};
  }
};
</script>
