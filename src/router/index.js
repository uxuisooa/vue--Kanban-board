import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const Login = { template : '<div>로그인 페이지</div>' }
const NotFound = { template: '<div>로그인 페이지를 찾을 수 없습니다.</div>'}


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '*', component: NotFound }
  ]
})

export default router