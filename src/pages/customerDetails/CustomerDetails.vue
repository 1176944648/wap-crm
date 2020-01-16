<template>
  <div>
    <Header title="详情"/>
    <div class="detail">
      <router-link :to="'/Details/Information/'+user">基本信息</router-link>
      <router-link :to="'/Details/Record/'+user">跟单记录</router-link>
      <router-link :to="'/Details/Sign/'+user">签约信息</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../../components/header/Header.vue"
import bus from "../../assets/bus"
export default {
  components:{
    Header
  },
  data(){
    return{
      user:''
    }
  },
  created(){
    this.user = this.$route.params.user
  }
  
}
</script>

<style lang="stylus" scoped>
  .detail
      width 100%
      height 1rem
      display flex
      background #fff
      a
          text-align center
          font-size .32rem
          line-height 1rem
          flex 1
          color black
          height 1rem
      .router-link-exact-active
          color blue
          border-bottom .04rem solid blue
</style>