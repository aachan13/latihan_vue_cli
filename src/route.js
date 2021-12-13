import Vue from 'vue'
import VueRouter from 'vue-router'
import FlashSale from './views/FlashSale'
import Mahasiswa from './views/Mahasiswa'

Vue.use(VueRouter)

const routing = [
    {
        path: '/',
        name: 'home',
        component: FlashSale
    },
    {
        path: '/mahasiswa',
        name: 'mahasiswa',
        component: Mahasiswa
    }
]

const router = new VueRouter({
  routes: routing
})

export default router