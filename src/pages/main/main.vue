<template>
  <div id="main">
    <Header :title="title">
    <div class="city">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </div>
    </Header>
    <div class="picture"></div>
    <div class="welcome">欢迎回来</div>
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
import Header from "../../components/header/Header.vue";
// import { TreeSelect } from 'vant';

export default {
  components: {
    Header
    // [TreeSelect.name] : TreeSelect
  },
  data() {
    return {
      title: "首页",
      value1: 0,
      option1: [
        { text: '上海', value: 0 },
        { text: '北京', value: 1 },
        { text: '南京', value: 2 },
        { text: '杭州', value: 3 },
        { text: '郑州', value: 4 },
      ],
    };
  }
};
</script>


<style lang="stylus" scoped>
#main
  width: 100%
  height: 100%
  position: relative
.city
  position: absolute
  right: 0rem
  top: -0.2rem
  .van-dropdown-menu
   height 0.9rem
   background none    
   span.van-dropdown-menu__title 
    color #ffffff !important


 
.picture
  width: 100%
  height: 2.7rem
  border: 0.02rem solid pink
  background: url('../../assets/img/bannar.jpg')
  background-size: 100%
.welcome
  width: 7.5rem
  height: 1rem
  background: url('../../assets/img/welcome.png') no-repeat
  text-indent: 0.6rem
  line-height: 1rem
  border-bottom: 0.02rem solid #ebebeb
ul
  width: 7.5rem
  height: 3.5rem
  margin-top: 0.32rem
  li
    float: left
    margin: 0 0.5rem 0.4rem
  .list
    width: 1.28rem
    height: 1.5rem
    background: url('../../assets/img/list.jpg')
    background-size: 100%
  .message
    width: 1.69rem
    height: 1.47rem
    background: url('../../assets/img/message.jpg')
    background-size: 100%
  .map
    width: 1.1rem
    height: 1.5rem
    background: url('../../assets/img/map.jpg')
    background-size: 100%
  .deal
    width: 1.69rem
    height: 1.5rem
    background: url('../../assets/img/deal.jpg')
    background-size: 100%
    margin-left: 0.3rem
a
  width: 1.69rem
  display: block
  height: 1.47rem
</style>