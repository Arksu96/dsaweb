import Login from './components/auth/Login.vue'
import Main from './components/Main.vue'
import AlarmTab from './components/tabs/AlarmTab'
import StatsTab from './components/tabs/StatsTab'
import SettingsTab from './components/tabs/SettingsTab'

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
        component: Login,
    }, 
    {
        path: '/alarm',
        name: 'alarmtab',
        component: AlarmTab
    },
    {
        path: '/stats',
        name: 'statstab',
        component: StatsTab
    },
    {
        path: '/settings',
        name: 'settingstab',
        component: SettingsTab
    }
]