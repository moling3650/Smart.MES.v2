import Vue from 'vue'
import Vuex from 'vuex'
import getStoreModules from '@/utils/getStoreModules'

Vue.use(Vuex)

const moduleContext = require.context('./modules', false, /\.js$/)
const store = new Vuex.Store({
  modules: getStoreModules(moduleContext),
})

export default store
