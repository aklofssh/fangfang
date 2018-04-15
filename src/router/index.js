import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/holle',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: ()=> import('@/home/index'),
    },
    {
      path: '/',
      name: 'login',
      component: ()=> import('@/pages/login'),
    },
  ]
})
