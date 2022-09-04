<template>
  <div class="desc-item">
    <div class="desc-item-title">{{ descTitle }}</div>
    <div style="margin-top:4px">
      <span class="desc-item-val">{{ descVal }}</span>
      <span class="desc-item-unit">{{ descUnit }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataViewDescBox',

  props: {
    // 描述标题
    descTitle: {
      type: String,
      default: ''
    },
    // 描述数值
    descVal: {
      type: String,
      default: ''
    },
    // 描述单位
    // 描述数值
    descUnit: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus">
.desc-item-title {
  transform: scale(0.92);
  transform-origin: 0 0;
  color: #43434A;
  font-weight: bold;
  line-height: 16px;
}
.desc-item-val {
  font-size: 22px;
  color:#28282D;
  font-weight: 400;
  line-height: 22px;
}
.desc-item-unit {
  font-size: 14px;
  color:#28282D;
  font-weight: 500;
}
</style>
