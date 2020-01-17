<template>
  <div>
    <Header title="打卡" />
    <div class="date">
      <span>2017年02月21日</span>
      <span>
        <van-icon name="warning" />打卡规则
      </span>
    </div>
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
  height: 0.82rem
  border-bottom: 0.01rem
  color: rgb(153, 153, 153)
  font-size: 0.22rem
</style>> 


