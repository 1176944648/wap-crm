<template>
  <div class="wrap">
    <div v-if="!this.orderList" class="vacancy">
      <img src="../../../assets/img/vacancy.png" alt="">
    </div>
      <ul  class="orderlist"  v-if="this.orderList">
        <li v-for="(item,index) of orderList" :key="index">
          <router-link :to="'orderlist/'+item.id">订单1</router-link>
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
      id : 1
    }]
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
      
</style>