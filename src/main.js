import Vue from 'vue'
import App from './App.vue'

const Login = { template : '<div>로그인 페이지</div>' }

const routes = {
  '/': App,
  '/login': Login
}

new Vue({
  el: '#app',
  
  computed: {
    VueComponent() { 
      return routes[window.location.pathname] ||
        { template: '<div>로그인 페이지를 찾을 수 없습니다.</div>'}
    }
  },

  // render: h => h(App)  
  render(h) { 
    return h(this.VueComponent)
  }
})