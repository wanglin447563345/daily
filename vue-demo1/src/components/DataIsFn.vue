<template>
  <div>
    <Button @click="add">add</Button>{{count}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count:0
      }
    },
    methods: {
      add(){
        this.count++
      }
    }
  }
</script>
