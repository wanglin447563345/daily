<template>
  <Layout class="home_layout">
    <Content>
      <router-view></router-view>
    </Content>
    <Sider class="home_sider">
      <Menu theme="light">
        <MenuItem name="1-1"><router-link to="/home/child1">Slot使用</router-link></MenuItem>
        <MenuItem name="1-2"><router-link to="/home/child2">父子组建通讯</router-link></MenuItem>
        <MenuItem name="1-3"><router-link to="/home/child3">computed、methods、watch</router-link></MenuItem>
        <MenuItem name="1-4"><router-link to="/home/child4">vuex</router-link></MenuItem>
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
<style scoped lang="scss">
  .home_layout{
    overflow-x: hidden;
    height: 100%;
  }
  .home_sider{
    height: 100%;
    background: #fff !important;
  }
</style>
