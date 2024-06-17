<template>
    <div>
        <input v-model="calc.num1">
        <input v-model="calc.num2">
        <div>{{ calc.result }}</div>
    </div>
</template>
<script setup>
import {watch, reactive} from 'vue';

    let calc =reactive({ num1:0, num2:0, result:0})
    watch( calc, (newNum,oldNum) => console.log(newNum) )
    // watch( calc.num2, (newNum,oldNum) => console.log(newNum) )
</script>