<template>

  <div id="main">
    <Header :title="title"/>
    <div class="picture"></div>
   
    
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
   #main
     width 100%
     height 100%
    .picture
       width 100%
       height 2.7rem
       border .02rem solid pink
       background url(../../assets/img/bannar.jpg)
       background-size 100%
    
     
</style>