import { createStore } from 'vuex'

export default createStore({
  state: {
    darkmode: false,
    search: '',
    keyboard: false,
    voice: false,
  },
  mutations: {
    updateDarkmode (state, value) {
      state.darkmode = value
    },
    updateKeyboard (state, value) {
      state.keyboard = value
    },
    updateVoice (state, value) {
      state.voice = value
    },
    updateSearch (state, value) {
      state.search = value
    },
  },
  actions: {
  },
  modules: {
  }
})
