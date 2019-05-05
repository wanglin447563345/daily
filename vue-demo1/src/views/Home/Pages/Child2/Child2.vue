<template>
  <div style="padding: 0 30px">
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

    <br>
    <br>
    <br>
    <br>
    <p>----------分割线-----------</p>
    <h2>组建里的data方法return出来的对象两种写法，产生不同的效果</h2>
    <h3>第一种：
      <br>
      const data = {
         count:0
      };

      export default{
         data(){
           return data
          }
      }

    </h3>
    <data-is-object></data-is-object>
    <data-is-object></data-is-object>
    <data-is-object></data-is-object>
    <br>
    <br>
    <br>
    <br>
    <h3>第二种：
      <br>
      export default{
      data(){
      return {
      count:0
      }
      }
      }

    </h3>
    <data-is-fn></data-is-fn>
    <data-is-fn></data-is-fn>
    <data-is-fn></data-is-fn>
  </div>
</template>

<script>
  import MyCom from '../../../../components/MyCom.vue'
  import DataIsObject from '../../../../components/DataIsObject.vue'
  import DataIsFn from '../../../../components/DataIsFn.vue'
  export default {
    data(){
      return {
        a:1212
      }
    },
    components:{
      MyCom,
      DataIsObject,
      DataIsFn
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
