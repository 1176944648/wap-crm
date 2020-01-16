<template>
  <div id="big">
    <div class="bi">
    <div class="logo">马上办公</div>
    <div class="title">业务管理系统</div>
     <ul>
       <li></li>
       <li></li>
       <li></li>
     </ul>
     <div class="huo">获取验证码</div>
     
    <router-link to="/index">登录</router-link>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style lang="stylus" scoped>
#big 
  width 100%
  height 100%
  background url(../../assets/bei.jpg)
  .bi
    width 2.3rem
    height 3.3rem
    border 1px solid  
    margin 0 auto
    text-align center
   
    .logo
      width 2.3rem
      height 0.21rem
      border 1px solid
      margin-top 0.1rem
    .title
      width 2.3rem
      height 0.16rem
      border 1px solid  
      margin-top 0.25rem
    ul
      width 2.3rem
      height 1.08rem
      border 1px solid  
      margin-top 0.34rem
      li
       height 0.36rem
       border-bottom  1px solid  
    .huo
       width 2.3rem
       height 0.32rem
       line-height 0.32rem
       border 1px solid 
       margin-top 0.25rem
       background #108ee9
       color #fff
      a
       display block
       width 2.3rem
       height 0.32rem
       line-height 0.32rem
       border 1px solid 
       margin-top 0.25rem
       background #108ee9
</style>