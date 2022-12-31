import { createRouter, createWebHistory } from 'vue-router'
import {Home,Register,Login} from '@/views/index.js'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component: Home

    },
    {
      path:'/register',
      name:'register',
      component: Register

    },
    {
      path:'/login',
      name:'login',
      component: Login

    },

  ]
})

export default router
