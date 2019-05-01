<template>
  <div class="not_found">
    <h1>404,未找到该页面T-T</h1>
    <div>
      返回 <Button type="primary" @click="goBack">首页</Button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goBack(){
        this.$router.push('/home')
      }
    }
  }
</script>

<style scope lang="scss">
  .not_found{
    margin-top: 100px;
  }
</style>
