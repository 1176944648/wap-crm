<template>
  <div>
    <h1>客户列表</h1>
    <router-link to="/search">搜索</router-link>
    <div>
      <nav class="tab">
        <li>
          <router-link to="/customerList/all">全部</router-link>
        </li>
        <li>
          <router-link to="/customerList/new">新分派</router-link>
        </li>
        <li>
          <router-link to="/customerList/follow">跟进中</router-link>
        </li>
        <li>
          <router-link to="/customerList/sign">签约中</router-link>
        </li>
        <li>
          <router-link to="/customerList/more">更多</router-link>
        </li>
      </nav>

      <router-view />
    </div>
  </div>
</template>

<script>
import Search from "./search/search.vue";
export default {
  components: {
    Search
  }
};
</script>

<style lang="stylus" scoped>
    .tab
        list-style none
        display flex
        li
            display flex
            width .5rem
            height .5rem
            border 1px solid black

</style>