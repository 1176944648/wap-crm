<template>
  <div id="app">
 
  
   <router-view />
   
  </div>
</template>


<script>
 
import Header from "./components/header.vue"
export default {
    components:{   
      Header
    }
}
</script>


<style lang="stylus" scoped>
#app
  width 100%
  height 100%
</style>
