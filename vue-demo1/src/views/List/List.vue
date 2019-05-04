<template>
  <Row>
    <Col class="list_col" span="12" v-for="item in listData" :keys="item.id">
    <Card>
      <p slot="title">ID:{{item.id}}</p>
      {{item.name}}
    </Card>
    </Col>
    <div>
      {{otherGetter}}
    </div>
  </Row>
</template>
<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    computed:{

//      listData(){
//        return this.$store.getters.getterData
//      }
/*这里注意，不管开不开启命名空间都要加list*/
      /*不启用命名空间*/
      listData(){
        return this.$store.state.list.listData
      },
//      ...mapGetters([
//        'otherGetter'
//      ]),

      /*启用命名空间*/
//      ...mapState('list',[
//        'listData'
//      ]),
      ...mapGetters('list',[
        'otherGetter'
      ])

    },
    methods: {
      /*不启用命名空间*/
//      getList(){
//        this.$store.dispatch('getList')
//      }
//      ...mapActions([
//        'getList'
//        ])
      /*启用命名空间*/
//      getList(){
//        this.$store.dispatch('list/getList')
//      }
      ...mapActions('list', [
        'getList'
        ])
    },
    created () {
      this.getList()
    }
  }
</script>


<!--    ******不走vuex流程******    -->

<!--<script>
  import {getList} from '../../services/api'
  export default {
    data(){
      return {
        listData:[]
      }
    },
    mounted(){
      this.getList()
    },
    methods:{
      async getList (){
        const res =  await getList();
        this.listData=res.data
      }
    }
  }
</script>-->

<style scoped lang="scss">
  .list_col{
    margin:10px 0
  }
</style>
