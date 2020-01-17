<template>

  <div id="big">
    <div class="bi">
    <div class="title"></div>
     <ul>
       <li>
         <input type="text"  placeholder="输入工号"  v-model="userid">
       </li>
      <li>
         <input type="text"  placeholder="输入密码" v-model="password">
       </li>
       <li>
         <input type="text"  placeholder="输入验证码" v-model="seccode">
       </li>
     </ul>
     <div class="huo">获取验证码</div> 
     
    <router-link to="/index">登录</router-link>
    </div>
  </div>
</template>


<script>
export default {

  data(){
    return{
      userid:'',
      password:'',
      seccode:''
    }
  }
};
</script>


<style lang="stylus" scoped>
#big 
  height 100%
  width 100%
  background: url(../../assets/img/bei.jpg)  no-repeat
  background-size: 100% 100%
  .bi
    width: 6.5rem
    text-align: center
    margin: 0 auto
    padding-top: 4.2rem
    color #fff
    .title
      width 3.59rem
      height: 2.07rem
      background url(../../assets/img/title.jpg)  
      background-size 100%
      margin: -2.3rem 0 1.5rem 1.5rem
    ul
      width 6.5rem
      height 3rem
      border-radius .1rem
      background-image url(../../assets/img/gonghao.png)  
      background-size 100%
      li
        height 1rem
        border-bottom  .02rem solid #e7e7e7 
        input 
          height 0.9rem
          border none
          color #000
    .huo
       width 6.5rem
       height 0.94rem
       line-height 0.94rem
       margin-top 0.5rem
       background #108ee9
       color #fff
      a
       display block
       width 6.5rem
       height 0.94rem
       line-height 0.94rem
       margin-top 0.5rem
       background #108ee9
       color #fff
       
</style>