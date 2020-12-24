import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/main'
import Login from '@/components/login/login'
import Join from '@/components/login/join'
import ResetPass from '@/components/login/resetPass'
import PersonalCenter from '@/components/personal/personalCenter'

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
