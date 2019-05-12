<template>
  <div class="page2">
    {{log("render") }}
    <button @click="changeName">changeName</button>
    name:{{name}}
    <br>
    <br>
    <br>
    <button @click="changeAge">changeAge</button>
    age: {{info.age}}
    <br>
    <br>
    <br>
    <button @click="changeSex">changeSex</button>

  </div>
</template>

<script>
  export default {
    data() {
//      this.name = 'dasds';   /*name写在这里，vue并不会跟踪他，所以点击按钮并不会触发页面的更新*/
      return {
        log: window.console.log,
        name: 'dasds',
        info: {
          age: ''    /*如果这里age没有声明，点检changeAge不会触发页面更新*/
        },
        sex: 'dsdsa'
      }
    },
    beforeUpdate() {
      console.log('beforeUpdate被触发了')
    },
    methods: {
      changeName () {
        this.name = 'daewq'
      },
      changeAge () {
        this.info.age = 21
      },
      changeSex () {  /*这里要注意   当sex再组件里并没有使用   点击changeSex也不会触发更新的生命周期*/
        this.sex = '332432'
      }
    },

 //   beforeRouteEnter(to,from,next){} /*只写这个什么都不做  或导致页面打不开*/
//    beforeRouteEnter(to,from,next){
//      /*这里什么都不执行，页面将跳转不进来*/
//      console.log(to)
//      console.log(from)
//      console.log(next)
//      if(window.confirm('确定进图该页面吗')){
//        next()
//      } else {
////        取消会执行两次confirm，不知道为什么
//        next(false)
//      }
//    }
  }
</script>

<style scoped lang="scss">
</style>
