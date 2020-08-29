import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index/Index'
import List from '@/components/Index/List'
import Details from '@/components/Index/Details'
import Login from '@/components/Index/Login'
import Perslnfo from '@/components/Index/Perslnfo'
import Search from '@/components/Index/Search'
import Register from '@/components/Index/Register'
import Header from '@/components/public/Header'
import Footer from '@/components/public/Footer'


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
