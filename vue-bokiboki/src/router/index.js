import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/Main'
import Login from '@/components/login/Login'
import Join from '@/components/login/Join'
import ResetPass from '@/components/login/ResetPass'
import PersonalCenter from '@/components/personal/PersonalCenter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 主页
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    // 登录
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 注册
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    // 重置密码
    {
      path: '/resetPass',
      name: 'ResetPass',
      component: ResetPass
    },
    // 个人主页
    {
      path: '/personal',
      name: 'PersonalCenter',
      component: PersonalCenter
    }
  ]
})
