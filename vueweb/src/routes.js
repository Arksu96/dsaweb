import Login from './components/auth/Login.vue'
import Main from './components/Main.vue'
//import store from './store/store'
//import Router from 'vue-router'


export default [
    {
        path: '/', 
        name: 'home', 
        component: Main, 
        meta: {reqiresAuth: true}
    },
    {
        path: '/login', 
        name:'login', 
        component: Login
    }
]