import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Menu from '@/components/Menu'
import Contribute from '@/components/Contribute'
import Companies from '@/components/Companies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, 
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/Contribute',
      name: 'Contribute',
      component: Contribute
    }, 
    {
      path: '/Companies',
      name: 'Companies',
      component: Companies
    }
  ]
})
