<template>
    <input type="text" v-model="firstname">
    <input type="text" v-model="lastname">
    <div>{{ fullname }}</div>
    <hr>
    <input type="text" v-model="name.firstname">
    <input type="text" v-model="name.lastname">
    <div>{{ fullname2 }}</div>
    <hr>
    <input type="text" v-model="reactivename.firstname">
    <input type="text" v-model="reactivename.lastname">
    <div>{{ fullname3 }}</div>
</template>
<script setup>
import {ref, reactive, computed} from "vue";
    let firstname = ref("hong")
    let lastname = ref("gildong")
    let fullname = computed(()=> firstName.value + ' ' + lastName.value );

    let name = ref({ firstname : '길동', lastname : '홍'})
    let fullname2 = computed(()=> name.value.firstname + ' ' + name.value.lastname );
    
    let reactivename = ref({ firstname : '길동', lastname : '홍'})
    let fullname3 = computed(()=> reactivename.firstname + ' ' + reactivename.lastname );
</script>