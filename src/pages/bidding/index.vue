<template>
  <div>
    <Header title="订单竞价系统" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../../components/header/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style lang="stylus" scoped></style>