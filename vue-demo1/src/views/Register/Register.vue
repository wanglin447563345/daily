<template>
  <div class="register">
    <h1 class="title">
      注册
    </h1>
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <FormItem label="用户名" prop="username">
        <Input type="text" v-model="formCustom.username" number></Input>
      </FormItem>
      <FormItem label="密码" prop="passwd">
        <Input type="password" v-model="formCustom.passwd"></Input>
      </FormItem>
      <FormItem label="确认密码" prop="passwdCheck">
        <Input type="password" v-model="formCustom.passwdCheck"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formCustom')">注册</Button>
      </FormItem>
    </Form>
    <div class="to_login">
      已有账号，去<router-link to="/user/login">登录</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your password'));
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your password again'));
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('The two input passwords do not match!'));
        } else {
          callback();
        }
      };
      const validateAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Age cannot be empty'));
        }
        // 模拟异步验证效果
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please enter a numeric value'));
          } else {
            if (value < 18) {
              callback(new Error('Must be over 18 years of username'));
            } else {
              callback();
            }
          }
        }, 1000);
      };

      return {
        formCustom: {
          passwd: '',
          passwdCheck: '',
          username: ''
        },
        ruleCustom: {
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ],
          username: [
            { validator: validateAge, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
    }
  }
</script>
<style scoped lang="scss">
  .register{
    height: 370px;
    width: 460px;
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
  .register  .ivu-btn {
    width: 100%;
  }
  .to_login{
    text-align: right;
  }
</style>
