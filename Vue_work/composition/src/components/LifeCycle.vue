<template>
    <div>lifecycle</div>
</template>
<script setup>
import { onMounted, onUpdated } from "vue";
onMounted(() => console.log("마운트됨"));
onUpdated(() => console.log("업데이트됨"));
//create 훅에 해당
console.log("created");
</script>
