import { createStore } from 'vuex'

export default createStore({
  state: {
    darkmode: false,
  },
  mutations: {
    updateDarkmode (state, value) {
      state.darkmode = value
    },
  },
  actions: {
  },
  modules: {
  }
})
