<template>
    <div>
    {{ count }} {{ State.arr[0] }}
    <button @click="addBtn">증가</button>
    </div>
</template>

<script setup>
import {reactive} from "vue";
let state = reactive({ 
                                nested: { count: 0 },
                                arr: ["foo" , "bar"]
                                });
    const addBtn = () => state.nested.count++
</script>