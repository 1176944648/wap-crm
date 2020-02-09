<template>
  <div>
    <Header title="选择标签">
      <div>
        <router-link to="/customerList">确定</router-link>
      </div>
    </Header>

    <div class="tagwrap">
      <div class="tagtop">
        <div class="tagtitle">
          <div class="blueBlock"></div>
          <p>所有标签</p>
        </div>
        <div class="addtag">
          <p>新增标签</p>
          <img src="../../assets/img/rightArror.png" alt="">
        </div>
      </div>
      <div class="taglist">
        <div v-for="(item,index) of taglist" 
        :key="item.id" 
        :class="['tag',{'tagselect':item.select}]"
        @click="tagselect(index)"
        >
            {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header/Header.vue";
export default {
  components: {
    Header
  },
  methods:{
      tagselect:function(index){
          this.taglist[index].select =  !this.taglist[index].select;
      }
  },
  data() {
    return {
      taglist: [
        {
          id: "1",
          name: "我是标签1221",
          select:false
        },
        {
          id: "12",
          name: "我是2",
          select:false
        },
        {
          id: "123",
          name: "我3",
          select:false
        },
        {
          id: "1234",
          name: "我是标4",
          select:false
        },
        {
          id: "12345",
          name: "我是标签5777",
          select:false
        },
        {
          id: "123456",
          name: "我是签6",
          select:false
        },
        {
          id: "1234567",
          name: "我是标签",
          select:false
        },
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.tagwrap
  width: 100%
  padding-left: 0.3rem
.tagtop
  width: 100%
  height: 1.01rem
  border-bottom: 0.01rem solid #ebebeb
  display: flex
  justify-content: space-between
  align-items: center
.tagtitle
  width: 3rem
  height: 0.34rem
  display: flex
  align-items: center
  p
    margin-left: 0.18rem
    font-size: 0.34rem
    line-height: 0.34rem
    color: #000000
  .blueBlock
    background-color: #108ee9
    height: 0.3rem
    width: 0.08rem
.addtag
    margin-right: 0.3rem
    display: flex
    justify-content: flex-end
    align-items center
    p
        font-size .24rem
        color #108ee9
        margin-right .1rem
    img 
        height .25rem
        width .16rem
.taglist
    width 100%
    height 100%
    display flex
    flex-wrap wrap
    .tag
        height .55rem
        font-size .24rem
        padding .12rem .3rem
        margin-top .24rem
        margin-right .24rem
        border .01rem solid #888888
        color #888888
        border-radius .05rem
    .tagselect
        color #108ee9
        border-color #108ee9
</style>