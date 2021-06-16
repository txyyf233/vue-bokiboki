import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)
const state = {
  // 屏幕宽度
  windowWidth: window.innerWidth,
  // Main主页列数
  mainLine: window.innerWidth > 1200 ? 4 : 2,
  // 用户信息
  user: {},
  // 重置密码验证码间隔时间
  checkCodeTime: 0
}
// 同步
const mutations = {
  windowWidth (state, value) {
    state.windowWidth = value
  },
  mainLine (state, value) {
    state.mainLine = value
  },
  user (state, value) {
    state.user = value
  },
  checkCodeTime (state, value) {
    state.checkCodeTime = value
  }
}
// 异步
const actions = {
}

const getters = {
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  // 持久化
  plugins: [persistedState({
    reducer (val) {
      return {
        user: val.user,
        checkCodeTime: val.checkCodeTime
      }
    }
  })]
})
