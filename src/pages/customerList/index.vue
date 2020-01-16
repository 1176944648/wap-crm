<template>
  <div>
    <Header :title="title" />
    <router-link to="/search">搜索</router-link>
    <div>
      <nav class="tab">
        <li v-for="data of titlList" 
        :class="{active:data.active}" 
        @click="changeActive(data.route)" 
        :key="data.route">
          <router-link :to="'/customerList/'+data.route"> {{data.name}}</router-link>
        </li>
        <!-- <li class="active">
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
        </li> -->
      </nav>

      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "../../components/header/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      title: "客户列表",
      titlList:[{route:"all",name:"全部",active:true},
            {route:"new",name:"新分派",active:false},
            {route:"follow",name:"跟进中",active:false},
            {route:"sign",name:"签约中",active:false},
            {route:"more",name:"更多",active:false}],
      };
  },
  methods:{
    changeActive(route){
      // console.log(this.titlList);
      
      for(let data of this.titlList){//切换tab active 状态
        if(data.route==route){
          data.active = true
        }else{
          data.active = false
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.tab {
  width: 100%;
  height: 0.84rem;
  list-style: none;
  display: flex;

  li {
    display: flex;
    width: 1.5rem;
    height: 100%;
    justify-content: center;

    a {
      display: flex;
      align-self: center;
      font-size: 0.28rem;
      color: #333;
    }
  }

  .active {
    border-bottom: 0.04rem solid #108ee9;

    a {
      color: #108ee9;
    }
  }
}
</style>