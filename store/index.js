import talks from '~/store/talks.js'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      namespaced: true,
      talks
    }
  })
}

export default createStore
