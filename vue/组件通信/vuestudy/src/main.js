// vue项目的核心文件
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//全局文件引入

//插件引入

//样式 引入全局样式
import "@/styles/index.scss";

//组件引入

new Vue({
  router,//挂载路由router
  store,
  render: h => h(App)
}).$mount('#app')
