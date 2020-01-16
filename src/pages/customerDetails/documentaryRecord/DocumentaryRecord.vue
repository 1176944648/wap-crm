<template>
    <div>
        跟单记录
    </div>
</template>

<script>
import bus from "../../../assets/bus"
export default {
    created(){
        console.log(this.$route.params.user)
    }
}
</script>

<style>

</style>