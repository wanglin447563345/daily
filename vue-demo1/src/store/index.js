import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import test from  './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list,
    test
  },
})
