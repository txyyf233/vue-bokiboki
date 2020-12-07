import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/Main'
import Login from '@/components/login/login'
import Join from '@/components/login/join'
import ResetPass from '@/components/login/resetPass'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/resetPass',
      name: 'ResetPass',
      component: ResetPass
    }
  ]
})
