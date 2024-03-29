
import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
// import store from '../index'
import api from './api'

const state = {
  vueSocketIO: null
}

const mutations = {
  SET_VUE_SOCKET_IO: (state, vueSocketIO) => {
    state.vueSocketIO = vueSocketIO
  }
}

const actions = {
  register({ commit }) {
    const vueSocketIO = new VueSocketIO({
      debug: process.env.NODE_ENV === 'development',
      connection: `${window.location.protocol}//${window.location.hostname}:${api.state.socketPort}`,
      // vuex: {
      //   store,
      //   actionPrefix: 'SOCKET_',
      //   mutationPrefix: 'SOCKET_'
      // },
      options: {
        path: api.state.baseApi + '/socket.io',
        transports: ['websocket']
      }
    })
    Vue.use(vueSocketIO)
    commit('SET_VUE_SOCKET_IO', vueSocketIO)
  },
  logout() {
    state.vueSocketIO?.io.close()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
