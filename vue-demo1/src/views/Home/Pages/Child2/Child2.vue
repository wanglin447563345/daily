<template>
  <div>
    <h1>父子组建通讯</h1>
    <br>
    <br>
    <Button type="primary" @click="getChildFun">这里是父组件</Button>
    <!--  @是v-on:形式的缩写   -->
    <!--
    当parentProps前面没有用冒号（v-bind:），
    传递过去的是一个字符串常量，
    这里要注意数字传过去也是个数字字符串，要想传一个数字常量过去必须前面加冒号（v-bind:）
    加了冒号（v-bind:）,
    后面跟的值必须是在data里定义过的，数字除外
    -->
    <!--<my-com @parentFun="fun"  ref="my_com" parentProps=""></my-com>-->
    <!--<my-com @parentFun="fun"  ref="my_com" parentProps="1"></my-com>-->
    <!--<my-com @parentFun="fun"  ref="my_com" :parentProps="1"></my-com>-->
    <my-com @parentFun="fun"  ref="my_com" :parentProps="a"></my-com>
  </div>
</template>

<script>
  import MyCom from '../../../../components/MyCom.vue'
  export default {
    data(){
      return {
        a:1212
      }
    },
    components:{
      MyCom
    },
    methods:{
      fun(params){
        console.log('——这里是父组件定义的方法——')
        console.log(params)
      },

      /*调用子组件的方法*/
      getChildFun(){
        /*
        这里注意是refs，不是ref
        */
//        this.$refs.my_com.childFun('sdsa')
        this.$refs.my_com.childFun({a:'我是父组件传过来的参数',b:'hehe'})
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
