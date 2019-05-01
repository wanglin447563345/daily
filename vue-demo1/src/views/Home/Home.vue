<template>
  <Layout class="home_layout">
    <Content>
      <router-view></router-view>
    </Content>
    <Sider class="home_sider">
      <Menu theme="light">
        <MenuItem name="1-1"><router-link to="/home/child1">二级页面1</router-link></MenuItem>
        <MenuItem name="1-2"><router-link to="/home/child2">二级页面2</router-link></MenuItem>
        <MenuItem name="1-3"><router-link to="/home/child3">二级页面3</router-link></MenuItem>
        <MenuItem name="1-4"><router-link to="/home/child4">二级页面4</router-link></MenuItem>
      </Menu>
    </Sider>
  </Layout>
</template>
<script>
  export default {
    data () {
      return {
        value1: 0
      }
    }
  }
</script>
<style>
  .home_layout{
    overflow-x: hidden;
    height: 100%;
  }
  .home_sider{
    height: 100%;
    background: #fff !important;
  }
</style>
