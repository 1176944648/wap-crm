<template>

  <div id="big">
    <div class="bi">
 
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
  background-image url(../../assets/img/bei.jpg) 
  background-size 100%
  .bi
    width: 4.6rem;
    text-align: center;
    margin: 0 auto;
    padding-top: 4rem;
    color #fff
    ul
      width 4.6rem
      height 2.16rem
      border .02rem solid  
      background-image url(../../assets/img/gonghao.png) 
      background-size 100%
      li
        height 0.72rem
        border-bottom  .02rem solid #e7e7e7 
        input 
          height 0.7rem
          border none
          margin-right -1rem
          color #000
    .huo
       width 4.6rem
       height 0.72rem
       line-height 0.72rem
       margin-top 0.5rem
       background #108ee9
       
      a
       display block
       width 4.6rem
       height 0.72rem
       line-height 0.72rem
       margin-top 0.5rem
       background #108ee9
       
</style>