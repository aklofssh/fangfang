import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Information from '@/pages/Information'   
import OrderInfo from '@/pages/OrderInfo' 
import GoodsList from '@/pages/GoodsList'   


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>
        import('@/home/Home'),
      children: [
        {
          path: 'information',
          name: 'information',
          component: Information
        },
        {
          path: 'orderInfo',
          name: 'orderInfo',
          component: OrderInfo
        },
        {
          path: 'goodsList',
          name: 'goodsList',
          component: GoodsList
        }
      ]

    },
  ]
})
