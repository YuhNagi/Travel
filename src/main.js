// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
//一般new一个对象需要赋值给一个变量，上面代码用来跳过eslint检查，可以不用赋值给变量，---eslint是js代码检查工具
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
