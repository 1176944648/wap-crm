<template>
  <div class="wrap">
    <div class="integral">
      <div class="integralTitle">
        当前积分
        <span @click="open">
          <van-icon name="browsing-history-o" class="iconType" v-show="close" />
          <van-icon name="closed-eye" class="iconType" v-show="!close" />
        </span>
        <p>{{grade}}</p>
        <span class="stageChange" v-if="!stage">竞价阶段无人出分</span>
      </div>
      <van-count-down :time="time" @finish = "stageChange">
        <template v-slot="timeData">
          <div class="stage">
            当前为
            <van-tag type="primary" size="medium" v-if="stage">竞价</van-tag>
            <van-tag color="#ffb400" size="medium" v-if="!stage">竞速</van-tag>
            阶段,
            <span class="item">{{ timeData.seconds }}</span>秒后结束
          </div>
        </template>
      </van-count-down>
    </div>
    <div class="message"></div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        title="选择积分"
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <button readonly clickable @click="showPicker = true">竞价</button>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {
      value: "",
      showPicker: false,
      columns: [],
      grade: null,
      close: true,
      stage: true,
      time: 30000,
      
    };
  },
  created() {
    this.grade = 5000;
    this.integral(this.grade);
  },
  methods: {
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onConfirm(value) {
      //选择出价积分
      this.value = value;
      this.dialog(value);
    },
    integral(num) {
      for (let i = 50; i <= num; i += 50) {
        this.columns.push(i);
      }
    },
    dialog(value) {
      //弹框组件
      Dialog.confirm({
        title: "",
        message: `确定要消耗${value}积分吗`
      })
        .then(() => {
          this.showPicker = false;
        })
        .catch(() => {});
    },
    open() {
      //积分显示隐藏
      this.close = this.close ? false : true;
    },
    stageChange(){
      this.stage = false,
      this.time = 60000
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrap
  background: #f8f8f8
  width: 100%
  height: 94%
  padding: 0.4rem 0
  .integral
    width: 7.12rem
    height: 2.8rem
    border-radius: 0.1rem
    background: #fff
    margin: 0 auto
    text-align: center
    padding: 0.4rem 0
    box-shadow: 0.04rem 0.04rem 0.1rem #e5e4e4
    .integralTitle
      position: relative
      margin-bottom: 0.5rem
      .iconType
        vertical-align: middle
        font-size: 0.34rem
        padding: 0 0.08rem 0.08rem 0
      p
        font-size: 0.5rem
        font-weight: 600
      .stageChange
        position absolute
        font-size .25rem
        color #ff5e5e
        left 2.5rem
    .stage
      font-size: 0.25rem
      color: #999
      .item
        display: inline
        color: #108ee9
  .message
    margin: 0.4rem auto 0
    width: 7.12rem
    height: 9rem
    border-radius: 0.1rem
    background: #fff
    box-shadow: 0.04rem 0.04rem 0.1rem #e5e4e4
  .van-popup
    width: 100%
  button
    position: fixed
    left: 0
    bottom: 0
    border: 0
    width: 100%
    height: 0.94rem
    background: #108ee9
    color: #fff
</style>