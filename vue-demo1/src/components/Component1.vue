<template>
  <div>
    <h2>加keep-alive</h2>
    <br>
    <br>
    <br>
    <input v-model="msg"/>
    <br>
    <br>
    <br>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        msg: ''
      }
    }
  }
</script>
