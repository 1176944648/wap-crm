<template>

  <div id="main">
    <Header :title="title"/>
    <div class="picture"></div>
    <div class="welcome">欢迎回来 </div>
    <ul>
      <li class="list"> 
        <router-link to="/customerList"></router-link>
        <!-- 跳转客户列表 -->
      </li>
      <li class="message">
        <router-link to="/information"></router-link>
<!-- 信息录入暂时没有写 -->
      </li>
      <li class="map">
        <router-link to="/clock"></router-link>
        <!-- 打卡（地图找房） -->
      </li>
      <li class="deal">
        <router-link to="/bidding"></router-link>
        <!-- 订单竞拍 -->
      </li>
    </ul>
     
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
    .welcome
       width 7.5rem
       height 1rem
       background url(../../assets/img/welcome.png) no-repeat  
       text-indent 0.6rem
       line-height 1rem
       border-bottom .02rem solid #ebebeb
     ul
       width 7.5rem
       height 3.5rem
       margin-top 0.32rem
       li
        float left
        margin: 0 0.5rem 0.4rem;
       .list
        width 1.28rem
        height  1.5rem
        background url(../../assets/img/list.jpg)  
        background-size: 100% 
       .message
        width 1.69rem
        height  1.47rem
        background url(../../assets/img/message.jpg)  
        background-size: 100% 
       .map
        width 1.1rem
        height  1.5rem
        background url(../../assets/img/map.jpg)  
        background-size: 100% 
       .deal
        width 1.69rem
        height  1.5rem
        background url(../../assets/img/deal.jpg)  
        background-size: 100% 
        margin-left 0.3rem

      a
      width 1.69rem
      display block
      height  1.47rem
       
        
    
     
</style>