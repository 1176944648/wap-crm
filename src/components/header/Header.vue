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
  background #108ee9
  color #fff
  .wrap
    position fixed
    top 0
    left 0
    height .88rem
    width 100%
    display flex
    padding-top .15rem
    .logo
      padding-left .1rem
      img 
        width 1.7rem
        height .48rem
    .title
      width 4.35rem
      text-align center
      line-height .5rem
</style>