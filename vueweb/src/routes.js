import Login from './components/auth/Login.vue'
import Main from './components/Main.vue'

export default [
    {
        path: '/', 
        name: 'home', 
        component: Main, 
        meta: {requiresAuth: true}
    },
    {
        path: '/login', 
        name:'login', 
        component: Login
    } 
]