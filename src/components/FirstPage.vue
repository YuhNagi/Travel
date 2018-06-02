  <template>
    <div>
        <h3>This is my first Vue component</h3>
        <p>{{num1}}</p>
        <input type="button" @click="increase" value="btn1">
        <input type="text" @keydown="onkeyDown"><hr />
        <textarea  v-model="inputValue"></textarea>
        <p v-html="computedValue"></p>
        <input type="button" value="获取当前时间戳" @click="getCurTime">
        <Home @myEvent="onMyevent"></Home>
       <!--  <Home v-for="(value,key) in objList" :key="key"></Home> -->
    </div>
  </template>

<script>
import Home from './Home'
export default {
  name:'FirstPage',
  components:{
    Home
  },
  data (){
    return {
      objList:{
        name:'apple',
        price:10,
        color:'red',
        num:66
      },
      num1:11,
      inputValue:''
    }
  },
  computed:{
    computedValue (){
      return (this.inputValue.replace(/\n/g,'<br />'));      
    },
    curTimeSecond (){
      return new Date();
    }
  },
  methods:{
    increase () {
      this.num1=this.num1+1;
    },
    onkeyDown (){
      console.log('鼠标按下！')
    },
    onMyevent (m){
      console.log('组件事件',m)
    },
    getCurTimeSecond (){
      return new Date();
    },
    getCurTime (){
      // console.log('当前时间为：',this.curTimeSecond)
      console.log('当前时间为：',this.getCurTimeSecond())
    }
  }
}
</script>
