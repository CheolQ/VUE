import {reactive, computed, toRefs} from 'vue';

function plusCalulator() {
    let state = reactive ({
        num1:10, 
        num2:10,
        result : computed(()=> parseInt(state.num1) + parseInt(state.num2) ) 
    });
    return toRefs(state);
}
export {plusCalulator}