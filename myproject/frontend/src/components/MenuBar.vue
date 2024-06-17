<template>
    <ul>
        <li v-for="me in menu">{{ me }}</li>
    </ul>
</template>
<script>
    export default {
        props : {
            'menu' : { type:Object }
        }
}
</script>
    <style>
    </style>