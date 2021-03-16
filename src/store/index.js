import { createStore } from 'vuex'

export default createStore({
  state: {
    darkmode: false,
    keyboard: false,
  },
  mutations: {
    updateDarkmode (state, value) {
      state.darkmode = value
    },
    updateKeyboard (state, value) {
      state.keyboard = value
    },
  },
  actions: {
  },
  modules: {
  }
})
