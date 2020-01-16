<template>

  <div id="b">
    <Header :title="title"/>
    <div>首页</div>
   
    
  </div>
</template>


<script>
import Header from "../../components/header/Header.vue"

export default {
    components:{
      Header
    },
    data(){
      return{
        title:"首页"
      }
    }
}
</script>


<style lang="stylus" scoped>
   
    
     
</style>