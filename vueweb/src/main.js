import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import Vuex from 'vuex'
import Axios from 'axios'
import store from './store/store'

Vue.config.productionTip = false
Axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.prototype.$http = Axios;

const token = localStorage.getItem('user-token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

//pozwala na przekierowanie do login jesli uzytkownik nie zalogowany (brak tokenu)
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
