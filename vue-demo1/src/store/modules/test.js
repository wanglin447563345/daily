const state = {
  testData:[
    {
      id: 1,
      name: 'sas',
      age: 30,
      address: '上海市嘉定区'
    },
    {
      id:2,
      name: 'marry',
      age: 20,
      address: 'shanghaijiadingqu'
    }
  ]
}
const getters = {
  getData(){
    return state.testData.map(item=>{
      return {
        id:item.id,
        name:item.name,
        age:item.age*2,
        address:item.address
      }
    })
  }
}


export default {
  // namespace: true,
  state,
  getters
}
