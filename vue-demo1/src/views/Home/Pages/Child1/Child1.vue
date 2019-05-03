<template>
  <div class="child1">
    <h1>Slot使用</h1>
    <br>
    <br>
    <div class="flex">
      <Input v-model="inputValue"/><Button type="primary" @click="add">添加</Button>
    </div>


      <!--{{state}}-->
      <ul>
        <li v-for="(item,i) in dataList" :key="i">
          <br/>
          <my-slot>
          <template v-slot:slot1="slotProps">
            插槽传过来的属性：{{slotProps.slotProps}}
          <h2>
            {{item}}
            <Button type="error" @click="dec(i)">删除</Button>
          </h2>
          </template>
          </my-slot>
        </li>
      </ul>

    <!--<br>-->
    <!--<br>-->
    <!--<br>-->
    <!--<br>-->
    <!--<br>-->
    <!--<my-slot>-->
      <!--<div slot="slot2">-->
        <!--<h3>插槽slot2</h3>-->
      <!--</div>-->
    <!--</my-slot>-->
  </div>
</template>

<script>
  import MySlot from '../../../../components/MySlot.vue'
  export default {
    data(){
      return {
        inputValue:'',
        dataList:[1]
      }
    },
    methods:{
      add(){
        this.dataList.push(this.inputValue)
        this.inputValue=''
      },
      dec(i){
        this.dataList.splice(i,1)
      }
    },
    components:{
      MySlot
    }
  }
</script>

<style scoped lang="scss">
  .child1{
    width: 400px;
    margin:0 auto;
    .flex{
      display: flex;
    }
  }

</style>
