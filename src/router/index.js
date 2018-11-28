import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Guard from '@/components/Grain/Guard'
import RotationPlan from '@/components/Grain/RotationPlan'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Guard
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/rkdj',
      name: 'Guard',
      component: Guard
    },
    {
      path: '/RotationPlan',
      name: 'RotationPlan',
      component: RotationPlan
    },
  ]
})
