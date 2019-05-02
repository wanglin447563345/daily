<template>
  <div>
    <br/>
    <h2>{{parentProps}}</h2>
    <br/>
    <Button @click="getParentFun">这里是子组件</Button>
  </div>
</template>

<script>
  export default {
    /*
    * 第一种接收方式，
    * 不推荐，
    * 不能判断父组建传过来的数据类型
    */
//    props:['parentProps'],

    /*
    * 第二种接收方式
    * 不推荐
    * 不能设置默认值
    */
//    props:{
//      parentProps:Number
//    },

    /*
    * 第三种接收方式
    * 推荐
    */
    props:{
      parentProps: {
        type: Number,
        default: 0
      }
    },
    methods:{
      getParentFun(){
        /*
        $emit第一个参数为父组件传过来的方法名，也就是父组件@后面跟着的名字，
        第二个参数用来传递参数，可以是一个字符串，也可以是一个对象
        */
//        this.$emit('parentFun','我是子组件传过来的参数')
        this.$emit('parentFun',{a:'我是子组件传过来的参数',b:'haha'})
      },


      childFun(params){
        console.log('--我是子组件里定义的方法--')
        console.log(params)
      }
    }
  }
</script>

<style scope lang="scss">
</style>
