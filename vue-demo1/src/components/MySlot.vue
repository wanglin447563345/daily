<template>
  <div :style="{display:'flex'}">
    <Button @click="changeState">点击切换状态</Button>
    <!--l两种写法-->
    <!--<slot name="slot1" :slotProps="state"></slot>-->
    <slot name="slot1" v-bind="{slotProps:state}"></slot>



    <!--<slot name="slot2"></slot>-->
  </div>
</template>

<script>
export default {
  data(){
    return{
      state:false
    }
  },
  methods:{
    changeState(){
      this.state=!this.state
    }
  }
}
</script>

<style scope lang="scss">
</style>
