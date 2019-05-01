<template>
  <Layout>
    <Header class="main_header">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <MenuItem name="1">
          <router-link to="/home">首页</router-link>
        </MenuItem>
        <MenuItem name="2">
          <router-link to="/list">列表</router-link>
        </MenuItem>
        <MenuItem name="3">
          <router-link to="/page1">页面一</router-link>
        </MenuItem>
        <MenuItem name="4">
          <router-link to="/page2">页面二</router-link>
        </MenuItem>
      </Menu>
      <div>
        <Button type="primary" @click="logOut">退出</Button>
      </div>
    </Header>
    <Layout class="main_layout">
      <Content>
        <router-view></router-view>
      </Content>
    </Layout>
    <Footer>
      <div class="footer">
        <p>
          底部底部底部底部底部底部底部底部底部底部底部底部底部底部底部底部
        </p>
        <p>
          底部底部
        </p>
      </div>
    </Footer>
  </Layout>
</template>

<script>
  import cookie from 'js-cookie';
  export default {
    name: 'mainLayout',
    methods: {
      logOut(){
        this.$router.push('/user/login')
        cookie.remove('userId')
      }
    }
  }
</script>
<style>
  .main_header{
    display: flex;
    justify-content: space-between;
  }
  .active{
    color:#19be6b
  }
  .ivu-layout-footer{
    padding:0 !important;
  }
  .main_layout{
    height: calc(100vh - 145px);
    overflow: auto;
  }
  .footer{
    background: #515a6e;
    height: 80px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

</style>

