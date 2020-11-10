import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  // 屏幕宽度
  windowWidth: window.innerWidth,
  // Main主页列数
  mainLine: 4
}
// 同步
const mutations = {
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
