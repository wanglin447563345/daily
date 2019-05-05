<template>
  <div>
    <Button @click="add">add</Button>{{count}}
  </div>
</template>

<script>
  const data = {
    count:0
  }
  export default {
    data(){
      return data
    },
    methods: {
      add(){
        this.count++
      }
    }
  }
</script>
