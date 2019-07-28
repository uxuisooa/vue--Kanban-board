import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

const Login = { template : '<div>로그인 페이지</div>' }
const NotFound = { template: '<div>로그인 페이지를 찾을 수 없습니다.</div>'}

const routes = {
  '/': App,
  '/login': Login
}

new Vue({
  el: '#app',
  
  computed: {
    VueComponent() { 
      return routes[window.location.pathname] || NotFound
    }
  },

  // render: h => h(App)  
  render(h) { 
    return h(this.VueComponent)
  }
})