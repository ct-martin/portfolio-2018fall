import articles from '~/store/articles.js'
import projects from '~/store/projects.js'
import talks from '~/store/talks.js'
import Vuex from 'vuex'

const createStoreOfAll = {
  state: {
    list: projects.state.list.concat(articles.state.list.concat(talks.state.list))
  }
}

const createStore = () => {
  return new Vuex.Store({
    modules: {
      namespaced: true,
      projects,
      talks,
      articles,
      content: createStoreOfAll
    }
  })
}

export default createStore
