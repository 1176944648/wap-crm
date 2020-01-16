<template>
    <div>
        <h1>客户列表</h1>
        <router-link to="/search">搜索</router-link>
        <div>
            <router-link to="/customerList/all">ALL</router-link> |
            <router-link to="/customerList/new">New</router-link> |
            <router-link to="/customerList/follow">Follow</router-link> |
            <router-link to="/customerList/sign">Sign</router-link> |
            <router-link to="/customerList/more">More</router-link> |




            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
import Search from "./search/search.vue"
export default {
     components: {
        Search
  }
}

</script>