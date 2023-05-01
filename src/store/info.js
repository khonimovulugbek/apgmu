import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    Info: []
  },
  getters: {
  },
  mutations: {
    infoAdd(state, payload) {
      state.Info = payload
    }
  },
  actions: {
    async getInfo({ state, commit }) {
      const info = await axios.get('')
      console.log(info);
      commit("infoAdd", info)
    }
  },
})

