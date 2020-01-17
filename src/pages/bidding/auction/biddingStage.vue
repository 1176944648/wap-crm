<template>
  <div class="wrap">
    <div class="integral">当前积分</div>
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
      columns: []
    };
  },
  created() {
    this.integral(5000);
  },
  methods: {
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onConfirm(value) {
      this.value = value;     
      this.dialog(value)
    },
    integral(num) {
      for (let i = 50; i <= num; i += 50) {
        this.columns.push(i);
      }
    },
    dialog(value) {
      Dialog.confirm({
        title: "",
        message: `确定要消耗${value}积分吗`
      })
        .then(() => {
          this.showPicker = false;
        })
        .catch(() => {

        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrap
  background: #f8f8f8
  width: 100%
  height: 100%
  padding: 0.4rem 0
  .integral
    width: 7.12rem
    height: 4rem
    border-radius: 0.1rem
    background: #fff
    margin: 0 auto
  .message
    margin: 0.4rem auto 0.4rem
    width: 7.12rem
    height: 9rem
    border-radius: 0.1rem
    background: #fff
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