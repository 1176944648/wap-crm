<template>
  <div id="big">
    <div class="bi">
    
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
  height 100%
  width 100%
  background-image url(../../assets/img/bei.jpg) 
  background-size 100%
  .bi
    width: 2.3rem;
    text-align: center;
    margin: 0 auto;
    padding-top: 2rem;
    ul
      width 2.3rem
      height 1.08rem
      border 1px solid  
    
      li
       height 0.36rem
       border-bottom  1px solid  
    .huo
       width 2.3rem
       height 0.32rem
       line-height 0.32rem
       margin-top 0.25rem
       background #108ee9
       color #fff
      a
       display block
       width 2.3rem
       height 0.32rem
       line-height 0.32rem
       margin-top 0.25rem
       background #108ee9
</style>