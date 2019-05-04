import {getList} from '../../services/api'


/*初始化state*/
const state = {
  listData:[]
}

const getters = {
  getterData(state,b,a){/*第一个参数获取的是局部局部状态，第三个参数获取的根节点的状态*/
    return state.listData.map(item=>{
      return {
        id:item.id,
        name:`${item.name}--getter`
      }
    })
  },
  otherGetter(state,getters,a){
    return state.listData.length+getters.getterData.length
  }
}


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
