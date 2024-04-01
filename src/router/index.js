import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Button from '../views/Button.vue'
import Popup from '../views/Popup.vue'
import Help from '../views/Help.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/button',
        name: 'Button',
        component: Button
    },
    {
        path: '/popup',
        name: 'Popup',
        component: Popup
    },
    {
        path: '/help',
        name: 'Help',
        component: Help
    }
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach ((to, from,next) => {
    console.log('beforeEach')
    next()
})

export default router