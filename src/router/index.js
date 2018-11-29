import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Guard from '@/components/Grain/Guard'
import RotationPlan from '@/components/Grain/RotationPlan'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      // children: [
      //   { path: '/RotationPlan', component: RotationPlan , name: 'RotationPlan'},
      //   { path: '/HelloWorld', component: HelloWorld , name: 'HelloWorld'},
      //   { path: '/Guard', component: Guard , name: 'Guard'},
      // ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
  ]
})
