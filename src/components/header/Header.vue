<template>
  <header>
    <div class="logo">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <div class="title">{{title}}</div>
    <div class="slotBox">
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="stylus" scoped>
header 
  height 0.42rem
  width 100%
  background #108ee9
  padding-top .1rem
  font-size .16rem
  color #fff
  .logo 
    float left
    margin-left .1rem
    img 
      height .24rem
      width .86rem
  .title
    float left
    margin-left .5rem
  .slotBox
    float right
    margin-right .1rem
</style>