<template>
    <div>
        <h1>客户列表</h1>
        <router-link to="/search">搜索</router-link>
        <div>
            <router-link to="/customerList/all">ALL</router-link>
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