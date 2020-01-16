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
            <span> 预算：{{item.budget}}</span>
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
      div 
        border-bottom 1px solid #ebebeb   
        padding .3rem 0
        .name 
          margin-bottom .2rem
        span 
          color #666
          font-size .25rem
</style>