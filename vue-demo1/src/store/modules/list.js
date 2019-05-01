import {getList} from '../../services/api'


/*初始化state*/
const state = {
  listData:[]
}

const getters = {}


// actions
const actions = {
  async getList ({ commit }) {
    const res = await getList();
    commit('setList', res.data)
  }
}

// mutations
const mutations = {
  setList (state, listData) {
    state.listData = listData
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
