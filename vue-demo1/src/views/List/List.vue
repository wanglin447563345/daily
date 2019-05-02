<template>
  <Row>
    <Col class="list_col" span="12" v-for="item in listData" :keys="item.id">
    <Card>
      <p slot="title">ID:{{item.id}}</p>
      {{item.name}}
    </Card>
    </Col>
  </Row>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    computed:mapState({
      listData:state=>state.list.listData
    }),
    methods: mapActions('list', [
      'getList'
    ]),
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
