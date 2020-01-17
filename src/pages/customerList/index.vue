<template>
  <div>
    <Header title="客户列表">
      <div>
        <router-link to="/search">
          <img src="../../assets/img/search.png" alt />
        </router-link>
        <router-link to="/search">标签></router-link>
      </div>
    </Header>

    <div>
      <!-- tab切换 -->
      <div class="tabWrap">
        <nav class="tab">
          <li
            v-for="data of titlList"
            :class="{active:data.active}"
            @click="changeActive(data.route)"
            :key="data.route"
          >
            <router-link :to="'/customerList/'+data.route">{{data.name}}</router-link>
          </li>
        </nav>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "../../components/header/Header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
      titlList: [
        { route: "all", name: "全部", active: true },
        { route: "new", name: "新分派", active: false },
        { route: "follow", name: "跟进中", active: false },
        { route: "sign", name: "签约中", active: false },
        { route: "more", name: "更多", active: false }
      ]
    };
  },
  methods: {
    changeActive(route) {
      // console.log(this.titlList);

      for (let data of this.titlList) {
        //切换tab active 状态
        if (data.route == route) {
          data.active = true;
        } else {
          data.active = false;
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
Header a img
  height: 0.31rem
  width: 0.31rem
  margin-right: 0.4rem
  position: relative
  top: 0.07rem
.tabWrap
  position: relative
  height: 0.84rem
.tab
  width: 100%
  height: 0.84rem
  list-style: none
  display: flex
  position: absolute
  top: 0
  left: 0
  z-index: 10
  li
    display: flex
    width: 1.5rem
    height: 100%
    justify-content: center
    a
      display: flex
      align-self: center
      font-size: 0.28rem
      color: #333
  .active
    border-bottom: 0.04rem solid #108ee9
    a
      color: #108ee9
</style>