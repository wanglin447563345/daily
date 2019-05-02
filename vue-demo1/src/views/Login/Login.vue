<template>
  <div class="login">
    <h1 class="title">登录</h1>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="用户名">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="密码">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
      <div class="to_register">
        没有账号，先<router-link to="/user/register">注册</router-link>
      </div>
    </Form>
  </div>
</template>
<script>
  import cookie from 'js-cookie'
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            cookie.set('userId','1');
            this.$router.push('/home');
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  .login{
    height: 320px;
    width: 360px;
    padding:30px;
    border:1px solid #ccc;
    box-shadow:  #ccc 0 0 5px;
    margin:0 auto
  }
  .title{
    text-align: center;
    font-size: 20px;
    margin-bottom: 40px;
  }
 .login  .ivu-btn {
   width: 100%;
 }
  .to_register{
    text-align: right;
  }
</style>
