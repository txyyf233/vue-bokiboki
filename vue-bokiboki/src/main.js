// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import bus from './bus'
import axios from 'axios'
import qs from 'qs'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.prototype.$bus = bus
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  })
// 响应拦截
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error && error.response) {
      if (error.response.status === 401) {
        this.$message({message: '授权失败，请您重新登录', type: 'error', duration: 1000})
        return this.$router.push('/login')
      }
    } else {
      error.message = '连接服务器失败!'
    }
    return Promise.reject(error)
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
