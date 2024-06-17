<template>
    <div>마우스 위치: {{ x }}, {{ y }}</div>
    <div>
        <input v-model="num1"> + 
        <input v-model="num2"> = 
        <span>{{ result }}</span>
    </div>
    </template>

<script setup>
import {plusCalulator} from '../common'
import {useMouse} from '../mouse'

let {num1, num2, result} = plusCalulator();
let {x, y} = useMouse();
</script>