import Vue from 'vue'
import Vuex from 'vuex'
import getStoreModules from '@/utils/getStoreModules'

Vue.use(Vuex)

const moduleContext = require.context('./modules', false, /\.js$/)
const store = new Vuex.Store({
  modules: getStoreModules(moduleContext),
})

if (module.hot) {
  const moduleKeys = moduleContext.keys().map(path => `./modules${path.split('.')[1]}`)
  module.hot.accept(moduleKeys, () => {
    store.hotUpdate({
      modules: getStoreModules(moduleContext),
    })
  })
}

export default store
