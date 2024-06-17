import {createStore} from 'vuex'
import persistedstate from "vuex-persistedstate";

const store = createStore({
    state(){
        return { count:0 }
    },


    state() {
        return {
          user: {},
        };
      },


mutations : {
    increment (state) {
        state.count++
    }
},

    user(state, data) {
      state.user = data;
    },
  plugins: [persistedstate({ paths: ["user"] })],
});


export default store;