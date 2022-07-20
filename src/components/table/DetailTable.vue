<template>
  <table class="global-c-form-table">
    <tr v-for="(item, i) in tableData" :key="i">
      <slot :colData="item">test</slot>
    </tr>
  </table>
</template>

<script>
// 展示详情页面组件
export default {
  name: 'DetailTable',

  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      tableData: this.data
    }
  }
}
</script>
