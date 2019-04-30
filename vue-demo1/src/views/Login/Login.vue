<template>
  <div>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
    <Button type="primary">登录</Button>
    <p>没有账号：<router-link to="/user/register">注册</router-link></p>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>
