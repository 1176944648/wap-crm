<template>
  <div class="wrap">
    <div v-if="!this.orderList" class="vacancy">
      <img src="../../../assets/img/vacancy.png" alt="">
    </div>
      <ul  class="orderlist"  v-if="this.orderList">
        <li v-for="item of orderList" :key="item.id" @click="routerTo(item.id)">
          <div>
            <p class="name">
              {{item.name}}
            </p>
            <span class="budget"> 预算：{{item.budget}}</span>
            <van-button type="info" size="small">加入竞拍</van-button>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  data(){
    return {
      orderList:null
    }
  },
  created(){
    this.orderList = [{
      id : 1,
      name : "张小姐",
      budget : 10000,
    },
    {
      id : 2,
      name : "李小姐",
      budget : 10000,
    }]
  },
  methods : {
    routerTo(id){
      this.$router.push({path:`orderlist/${id}`})
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrap
  width 100%
  .vacancy
    text-align center
    img 
      margin-top 2.07rem
      height 3.52rem
      width 4.47rem
  .orderlist
    li
      height 1.4rem
      width 100%
      padding-left .3rem
      padding-top .3rem
      position relative
      div 
        height 100%
        border-bottom 1px solid #ebebeb   
        padding-bottom  .3rem 
        .budget 
          color #666
          font-size .25rem
        .van-button
          position absolute
          right .3rem
          top .4rem
</style>