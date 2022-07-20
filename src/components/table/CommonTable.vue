<template>
  <el-table
    ref="mainTable"
    size="small"
    :height="height"
    :border="true"
    :cell-style="setCellStyle"
    :header-cell-style="defaultStyle"
    :data="getTableData"
    :highlight-current-row="true"
    @selection-change="handleSelectionChange"
    @sort-change="handleSortChange"
    @row-dblclick="handledbClick"
    @row-click="handleClick"
  >
    <!-- 控制显示序号列 -->
    <el-table-column
      v-if="isIndex"
      type="index"
      align="center"
      :fixed="isFixed"
    >
    </el-table-column>
    <!-- 控制显示选择列 -->
    <el-table-column
      v-if="isSelection"
      type="selection"
      align="center"
      :fixed="isFixed"
    >
    </el-table-column>
    <!-- 列表数据列渲染 -->
    <el-table-column
      v-for="(item, index) in getCurHeaders"
      :key="index"
      :label="item.label"
      :prop="item.prop"
      :width="item.width"
      :align="item.align"
      :fixed="item.fixed"
      :sortable="item.sortable"
      :formatter="item.formatter"
      :show-overflow-tooltip="item.overflow"
      :min-width="item.minWidth"
    >
    </el-table-column>
  </el-table>
</template>

<script>
// el-table二次封装 通用列表渲染组件
export default {
  name: 'CommonTable',

  props: {
    // 表头
    curHeaders: {
      type: Array,
      default () {
        return []
      }
    },
    // 内容
    curTableData: {
      type: Array,
      default () {
        return []
      }
    },
    // 是否带选择列
    isSelection: { type: Boolean, default: false },
    // 是否带序号列
    isIndex: { type: Boolean, default: false },
    // 是否有固定列
    isFixed: { type: Boolean, default: false },
    // 自定义高度
    height: { type: String, default: '100%' },
    // 是否支持无限滚动
    isInfiniteScroll: { type: Boolean, default: false },
    // 插入自定义样式
    setCellStyle: {
      type: Function,
      default () {
        return () => {}
      }
    },
    // name用于区分具体的表格定位
    name: { type: String, default: '' }
  },

  data () {
    return {
      // 当前版本的规定样式
      defaultStyle: {
        background: '#eef1f6',
        color: '#606266',
        textAlign: 'center'
      },
      // 无限滚动加载
      count: 20
    }
  },

  computed: {
    getCurHeaders () {
      return this.curHeaders
    },
    getTableData: {
      get () {
        if (this.isInfiniteScroll) {
          return this.curTableData.slice(0, this.count)
        } else {
          return this.curTableData
        }
      },
      set (val) {
        return val
      }
    }
  },

  methods: {
    // 双击处理事件
    handledbClick (row) {
      // 向父级抛出触发行
      this.$emit('getdbClickRow', { row, name: this.name })
    },
    // 单击处理事件
    handleClick (row) {
      // 当带有选择行的时候，单击事件同时视为选择该行
      if (this.isSelection) {
        this.$refs.mainTable.toggleRowSelection(row)
      }
      this.$emit('getClickRow', { row, name: this.name })
    },
    // 选择行处理事件
    handleSelectionChange (rowArray) {
      this.$emit('getSelectedRowArray', { rowArray, name: this.name })
    },
    // 回调排序事件
    handleSortChange ({ column, prop, order }) {
      this.$emit('handleSortChange', { column, prop, order })
    },
    // 滚轴返回顶部
    resetScroll () {
      this.$nextTick(() => {
        this.$refs.mainTable.bodyWrapper.scrollTop = 0
      })
    },
    // 无限滚动
    loadTable () {
      this.count += 10
      this.getTableData = this.curTableData.slice(0, this.count)
    }
  }
}
</script>
