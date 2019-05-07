<template>
  <div class="page2">
    Page2
  </div>
</template>

<script>
  export default {
    beforeRouteEnter(to,from,next){
      /*这里什么都不执行，页面将跳转不进来*/
      console.log(to)
      console.log(from)
      console.log(next)
      if(window.confirm('确定进图该页面吗')){
        next()
      } else {
//        取消会执行两次confirm，不知道为什么
        next(false)
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
