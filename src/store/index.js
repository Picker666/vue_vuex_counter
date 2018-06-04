import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  counter: 1
}

const mutations = {
  increase (state) {
    state.counter++
  },
  decrease (state) {
    state.counter--
  }
}

const actions = {
  increase ({ commit }) {
    commit('increase')
  },
  decrease ({ commit }) {
    commit('decrease')
  },
  increaseAsync ({ commit, state }) {
    setTimeout(function () {
      commit('increase')
    }, 1000)
  }
}

const getters = {
  counter: function (state, getters) {
    return getters.counter
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
