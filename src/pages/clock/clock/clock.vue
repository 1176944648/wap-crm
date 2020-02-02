<template>
  <div>
    <Header title="打卡" />
    <div class="date">
      <div>
        <span>2017年02月21日</span>
        <span>
          <van-icon name="warning" />打卡规则
        </span>
      </div>
    </div>
    <div class="location">
      <div>
        <van-icon name="location-o" />
        <span>马上办公</span>
        <van-icon name="replay" />
      </div>
    </div>
    <div class="clock"></div>
  </div>
</template>

<script>
import Header from "../../../components/header/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style lang="stylus" scoped>
.date
  width: 100%
  line-height: 0.82rem
  height: 0.82rem
  border-bottom: 0.01rem solid rgb(227, 227, 227)
  color: rgb(153, 153, 153)
  font-size: 0.22rem
  position: relative
  span:first-child
    margin-right: 3.62rem
  span:last-child i
    margin-right: 0.1rem
  div
    position: absolute
    left: 0.33rem
.location
  width: 100%
  height: 0.92rem
  line-height: 0.92rem
  font-size: 0.3rem
  border-bottom: 0.01rem solid #e3e3e3
  color: #333333
  position: relative
  div
    position: absolute
    left: 0.32rem
  i:first-child
    margin-right: 0.43rem
  span
    margin-right: 4.31rem
</style>> 


