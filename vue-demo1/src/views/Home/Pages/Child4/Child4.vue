<template>
  <div style="padding: 0 30px">
    <h1>mutation  VS  action</h1>
    <br>
    <br>
    <p>
      mutation只能执行同步操作，准确的说应该是只适合执行同步操作
    </p>
    <p>
      action可以执行异步操作
    </p>
    <br/>
    <p>
      假如在mutation里执行异步请求，我们在组建里commit调用mutation，在vue-devtool调试工具了看到muction触发了，
      但此时异步请求数据还没返回，所以要等到数据返回后我们才能看到页面数据更新，（这里真实的请求时间较短可能不明显，
      可以用定时器模拟下，效果更明显），试想一下，当页面有两个或更多异步请求，我们就无法跟踪哪个mutation改变了state
      哪个属性，所以，action就派上用场了，我们可以把异步请求放在action里，然后在获取到请求结果后在commit一个mutation，
      这样可以保证触发mutation时，state也立马更新
    </p>
    <p>
      总结：action和mutation执行异步的操作区别就在于，mutation是先触发mutation再去拿数据，而action是先拿到异步请求的数据
      再触发mutation
    </p>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
</style>
