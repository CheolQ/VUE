import headers from './header.js';
import footers from './footer.js';
import routers from './router.js';

const { createApp } = Vue
const template = /*html*/ `<div>
                                            <headers/>
                                            <RouterView/>
                                           <footers/>
                                        </div>`
                                       /* <fors.js>*/

//vue 인스턴스 생성
const component = {
    template  , //필드명과 변수명이 같다면 생략가능 (화면)
    name : "모듈연습",
    components : {headers, footers},
    data(){ return { name:'홍길동', msg:'안녕하세요'} },

    methods : {     //(모델)
        funca(){},
    },
    craeted() { },
    mounted() { },

    computed : {        //(기능)
        fullname() {},
    }

}
createApp(component).use(routers).mount("#app");