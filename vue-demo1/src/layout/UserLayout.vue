<template>
 <div class="user_layout">
   <h1 class="mb50">简单的Vue小项目</h1>
   <router-view></router-view>
 </div>
</template>

<script>
  export default {
    name: 'userLayout',

  }
</script>

<style>
  .user_layout{
    margin-top: 60px;
  }
  .mb50{
    margin-bottom: 50px;
    text-align: center;
  }

</style>
