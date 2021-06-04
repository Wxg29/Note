//路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'

//0.模块化 全局注册使用VueRouter
Vue.use(VueRouter)

//1.路由组件选项
import Home from '../views/Home.vue'

//2.定义路由信息,定义组件的映射关系
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/login",
    name: "Loign",
    component: () => import("../views/Login.vue")
  },
  //路由不存在重定向到Home
  {
    path: "*",
    redirect: {
      name: "Home"
    }
  }
]

//3.创建路由实例对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//4.暴露之后去挂载 main.js
export default router
