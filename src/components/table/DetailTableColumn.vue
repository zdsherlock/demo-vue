<template>
  <div>
    <td class="global-c-form-table-tb" width="13%">{{ label }}</td>
    <td>
      {{ colData.prop }}
    </td>
  </div>
</template>

<script>
// 表格详情-行组件
export default {
  name: 'DetailTableColumn',

  props: {
    // 列数据
    colData: {
      type: Object,
      default () {
        return {}
      }
    },
    // 列属性对象
    prop: {
      type: String,
      default: ''
    },
    // 列标签对象
    label: {
      type: String,
      default: ''
    }
  },

  data () {
    return {}
  },

  computed: {}
}
</script>
