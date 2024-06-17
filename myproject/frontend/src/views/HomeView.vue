<template>
  <PageTitle/>
  <div class="home">
    <!-- 동적데이터 전달( v-bind or ':' 사용) -->
    <PageTitle title="컴포넌트 사용 예제" menuno="10"></PageTitle>

    <!-- 배열 전달 -->
    <MenuBar :menu="['신발', '상의', '하의']"></MenuBar>
    
    <!-- 객체 전달 속성명과 데이터 이름이 같으면 생략가능 -->
    <!-- 아래와 동일 <HelloWorld :user/> -->
    <HelloWorld :user="user"/>
     
    <ChildComponent ref="child_component" />
    <hr>
    <!-- 자식 컴포넌트에서 부모 컴포넌트로 이벤트/데이터 전달 -->
    <ChildComponent4 @send-message="sendMessage"></ChildComponent4>
    
    <!-- 이름 있는 slot -->
    <SlotModalLayout>
        <template v-slot:header>
          팝업타이틀
        </template>
        <template v-slot:default>
          팝업컨텐츠
        </template>
        <template v-slot:footer>
          <button>닫기</button>
        </template>
    </SlotModalLayout>
    <hr>
    <!-- provide/inject -->
    <ProvideInjectChild></ProvideInjectChild>
    <!-- <FooterTitle>카피라이트 slot실습</FooterTitle> -->
    <hr>
    <PagingComponent v-bind="page" @go-page="goPage" />
    <hr>
      count: {{ count }}
      <button type="button" @click="increment">+</button>
  </div>
</template>

<script>
// @ is an alias to /src
import "bootstrap" 
import "bootstrap/dist/css/bootstrap.min.css"
import HelloWorld from '@/components/HelloWorld.vue'
import PageTitle from '@/components/PageTitle.vue'
import MenuBar from '@/components/MenuBar.vue'
import ChildComponent from '@/components/ChildComponent.vue'
import ChildComponent4 from '@/components/ChildComponent4.vue'
import SlotModalLayout from '@/components/SlotModalLayout.vue'
import ProvideInjectChild from '@/components/ProvideInjectChild.vue'
import PagingComponent from "@/components/PagingComponent.vue"


export default {
  name: 'HomeView',
  components: {
    HelloWorld, PageTitle, MenuBar, ChildComponent, 
    ChildComponent4, SlotModalLayout, ProvideInjectChild,
    PagingComponent
  },
  data(){
    return { user: {username:'choi', msg:'hi' },
             page : {} //{ firstPage, lastPage, startIdx, endIdx }; 
            }; 
  },
  provide(){
    return { itemlength : 4 };
  },
  created(){
    // fetch => total, currentPage
    this.page = this.pageCalc(6, 124, 3, 10);
  },
  computed : {
    count(){
      return this.$store.state.count;
    }
  },
  methods:{
    increment(){
      this.$store.comit('increment');
    },
    goPage(page){
      //fetch
      console.log('parent event', page);
    },
    sendMessage(msg){
      console.log(msg);
    },
    pageCalc(currentPage, total, pageSize = 10, pageUnit = 10) {
      let firstPage = 1;
      let lastPage =
        Math.floor(total / pageUnit) + (total % pageUnit == 0 ? 0 : 1);
      let startIdx = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
      let endIdx = startIdx + pageSize - 1;
      if (endIdx > lastPage) {
        endIdx = lastPage;
      }
      return { currentPage, firstPage, lastPage, startIdx, endIdx };
    }
  },
  mounted(){
        //  자식 컴포넌트 이벤트 발생
        // this.$refs.child_component.$refs.btn.click();

        // 자식컴포넌트 함수 직접 호출
        this.$refs.child_component.childFunc();
        this.$refs.child_component.$refs.username.value = 'mooyaho'
        this.$refs.child_component.$refs.username.focus();
  }
}
</script>
