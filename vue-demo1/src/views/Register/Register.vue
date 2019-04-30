<template>
  <div>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
    <Button type="primary">注册</Button>
    <p>已有账号，<router-link to="/user/login">登录</router-link></p>
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
