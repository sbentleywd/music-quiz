import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    accessToken: null,
		expired: false
  },
  mutations: {
    setState(state, payload) {
      state[payload.property] = payload.value
    }
  },
  strict: true
})

export default store
