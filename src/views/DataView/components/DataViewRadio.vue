// 看板单选钮组件
<template>
  <el-radio-group v-model="selectedRadio" class="data-view-radio">
    <el-radio-button :label="label1"></el-radio-button>
    <el-radio-button :label="label2"></el-radio-button>
    <el-radio-button v-if="label3" :label="label3"></el-radio-button>
  </el-radio-group>
</template>

<script>
//
export default {
  name: 'DataViewRadio',

  props: {
    // 默认选中项
    label1: {
      type: String,
      default: ''
    },
    label2: {
      type: String,
      default: ''
    },
    label3: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      // radio的控制
      selectedRadio: this.label1
    }
  }
}
</script>

<style lang="stylus">
.data-view-radio {
  .el-radio-button__inner {
    padding: 7px 20px
  }
 .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background-color: rgba(63,126,253,0.10)
    color: #1989FA
  }
}
</style>
