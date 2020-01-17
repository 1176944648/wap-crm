<template>
  <header>
   <div class="wrap">
      <div class="logo">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <div class="title">{{title}}</div>
    <div class="slotBox">
      <slot></slot>
    </div>
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
  height 0.88rem
  width 100%
  position relative
  .wrap
    background #108ee9
    position fixed
    top 0
    left 0
    height .88rem
    width 100%
    background #108ee9
    text-align center
    .logo
      position absolute
      left .2rem
      top .2rem
      img 
        width 1.7rem
        height .48rem
    .title
      height .88rem
      text-align center
      line-height .88rem
      color #fff
    .slotBox
      position absolute
      right .3rem
      top .2rem
      color #fff
</style>