<template>
  <div style="padding:20px">
    <h1>keep-alive</h1>
    <p>两个一样的组建  component1加了keep-alive，component2没加，
      当再输入框输入内容后，点击按钮切换 component1会保留原来输入框的值
      component2不会</p>
    <br>
    <br>
    <br>
    <button @click="changeCom('Component1')">component1</button>
    <button @click="changeCom('Component2')">component2</button>
    <br>
    <br>
    <br>
    <keep-alive exclude="Component2">
      <component :is="current" ></component>
    </keep-alive>
  </div>
</template>

<script>
import Component1 from '../../components/Component1.vue'
import Component2 from '../../components/Component2.vue'
  export default {
    data() {
      return {
        current: 'Component1'
      }
    },
    components: {
      Component1 ,
      Component2
    },
    methods: {
      changeCom(params) {
        this.current = params
      }
    }
  }
</script>

