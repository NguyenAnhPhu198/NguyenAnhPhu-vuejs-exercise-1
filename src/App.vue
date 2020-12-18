<template>
<div class="app">
 <Navbar/>
 <All/>
 <router-view/>
 </div>
</template>

<script>

import All from './components/All.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components:{
    Navbar, All
  }
}
 
</script>
<style>
.app {
  background: rgb(201, 194, 194);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

</style>
