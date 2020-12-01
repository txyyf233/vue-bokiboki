import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  // 屏幕宽度
  windowWidth: window.innerWidth,
  // Main主页列数
  mainLine: window.innerWidth > 1200 ? 4 : 2,
  // 用户信息
  user: {}
}
// 同步
const mutations = {
  windowWidth (state, value) {
    state.windowWidth = value
  },
  mainLine (state, value) {
    state.mainLine = value
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
  getters
})
