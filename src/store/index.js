import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    accessToken: null,
    expired: false,
    genres: {
      pop: {
        2010: '37i9dQZF1DX5Ejj0EkURtP',
        2000: '37i9dQZF1DX4o1oenSJRJd'
      },
      rock: {
        2010: '37i9dQZF1DX99DRG9N39X3',
        2000: '37i9dQZF1DX3oM43CtKnRV'
      },
      hipHop: {
        1980: '37i9dQZF1DX2XmsXL2WBQd',
        1990: '37i9dQZF1DX186v583rmzp'
      }
    },
		selectedGenre: null,
		selectedEra: null,
		playlistTracks: []
  },
  mutations: {
    setState(state, payload) {
      state[payload.property] = payload.value
    }
  },
  strict: true
})

export default store
