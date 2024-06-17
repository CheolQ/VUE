<template>
    {{ props.title }} {{ props.subject }}
</template>
<script setup>
import { defineProps } from 'vue';
// let props = defineProps(['title']);
let props = defineProps({title :   {type:String, 
                                                default : '타이틀초기값'
                                                },
                                    subject:{type:String,
                                                required : true
                                                }
                });
</script>
