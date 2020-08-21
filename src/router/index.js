import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index/Index'
import List from '@/components/Index/List'
import Details from '@/components/Index/Details'
import Login from '@/components/Index/Login'
import Perslnfo from '@/components/Index/Perslnfo'
import Search from '@/components/Index/Search'
<<<<<<< HEAD
import Register from '@/components/Index/Register'
=======
import Register from "@/components/Index/Register";
>>>>>>> f9f8f5dfc8f2b9908aa826596642a2c4d9e1149f

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/list',
      name: 'List',
      component: List
    },{
      path: '/details',
      name: 'Details',
      component: Details
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/persinfo',
      name: 'Perslnfo',
      component: Perslnfo
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
