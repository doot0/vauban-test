import Vue from 'vue'
import Vuex from 'vuex'
import SWAPI from '../api/swapi/characters.api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chars: [],
    favourites: []
  },
  actions: {
    async getCharacters ({ commit }) {
      let res = await SWAPI.get()
      commit('SET_CHARACTERS', res)
    }
  },
  mutations: {
    SET_CHARACTERS (state, data) {
      state.chars = data
    },
    SET_FAVOURITES (state, data) {
      state.favourites = data
    }
  },
  getters: {
    allCharacters: (state) => {
      return state.chars
    },
    allFavourites: (state) => {
      return state.favourites
    }
  }
})
