<template>
  <div style="width:500px">
    <h1>computed、methods、watch</h1>
    <br>
    <br>
   <div style="display: flex">
     a:<Input v-model="a" />
   </div>
    <br/>
    <br/>
    <div style="display: flex">
     b:<Input v-model="b" />
   </div>
    <br/>
    <br/>
   <h3>
     <div>computed方式</div>
     A: {{A}}

     <!--<div>methods方式</div>-->
     <!--A: {{A()}}   &lt;!&ndash;这里c后面要加(),computed方式不用加&ndash;&gt;-->
   </h3>
    <br/>
    <br/>
    <h3>
      <div>computed方式</div>
      B: {{B}}

      <!--<div>methods方式</div>-->
      <!--B: {{B()}}-->
    </h3>
    <br/>
    <br/>
    <h3>
      <div>computed方式</div>
      C: {{C}}

      <!--<div>methods方式</div>-->
      <!--C: {{C()}}-->
    </h3>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        a:1,
        b:2
      }
    },
    computed:{
      A(){
        /*
      c依赖的data里的a和b，
      无论改变哪个值都会执行这里
      */
        console.log('---A  执行了----')
        return Number(this.a) + Number(this.b)
      },
      B(){
        /*
        d没有依赖的data里的任何东西，
        只会在页面刷新的时候执行一次
        */
        console.log('---B  执行了----')
        return Date.now()
      },
      C(){
        /*
        e依赖的data里的a，
        只要改变a就会执行这里
        */
        console.log('---C  执行了----')
        return this.a
      }
    },
    methods:{
      /*
      * 只要我们改变ab中的任意一个值，
      * 三个方法都会被执行，
      * 相比上面的computed，
      * 显然更加耗资源
      * */
//      A(){
//        console.log('---A  执行了----')
//        return Number(this.a) + Number(this.b)
//      },
//      B(){
//        console.log('---B  执行了----')
//        return Date.now()
//      },
//      C(){
//        console.log('---C  执行了----')
//        return this.a
//      }
    },
    watch:{
//      a:'c'
    }
  }
</script>

<style scoped lang="scss">
</style>
