import { createStore } from 'vuex'

export default createStore({
  state: {
    darkmode: false,
    search: '',
    keyboard: false,
  },
  mutations: {
    updateDarkmode (state, value) {
      state.darkmode = value
    },
    updateKeyboard (state, value) {
      state.keyboard = value
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
