// 监听table的滚动事件;虚拟列表；下拉更多；v0.5
<template>
  <div style="height:800px">
    <el-table
      v-loading="loading"
      v-loadmore="loadMore"
      size="mini"
      height="100%"
      highlight-current-row
      :data="getTableData"
    >
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
  </div>
</template>

<script>
export default {
  name: 'TableScroll',
  // 自定义指令
  //  vue 官方文档：https://cn.vuejs.org/v2/guide/custom-directive.html
  directives: {
    loadmore: {
      bind (el, binding) {
        const selectWrap = el.querySelector('.el-table__body-wrapper')

        selectWrap.addEventListener('scroll', function () {
          let sign = 100
          const scrollDistance =
            this.scrollHeight - this.scrollTop - this.clientHeight
          if (scrollDistance <= sign) {
            binding.value()
          }
        })
      }
    }
  },
  props: {},
  data () {
    return {
      // 虚拟数据组
      getTableData: [],
      tableData: [],
      loading: false,
      total: 0,
      getCurHeaders: FIFTH_TABLE,
      tableRowCount: 25
    }
  },
  created () {},
  mounted () {
    let i = 0
    while (i < 1000) {
      this.tableData.push({ total_income: i })
      i++
    }
    this.getTableData = this.tableData.splice(0, this.tableRowCount)
  },

  watch: {},

  methods: {
    append (params) {
      this.loading = true
      this.$http[this.url]({
        ...params,
        offset: this.offset,
        limit: this.limit
      })
        .then(result => {
          this.tableData = [...this.tableData, ...result.data.rows]
          console.log(this.tableData)
          this.total = result.data.total || 0
        })
        .finally(() => {
          this.loading = false
        })
    },
    reload () {
      // 刷新重置 offset 和表格
      this.params.offset = 0
      this.tableData = []

      // api动态加载完 开始重新请求数据
      this.$nextTick(() => {
        this.init(this.params)
      })
    },
    // 滚动事件
    loadMore () {
      this.tableRowCount += 10
      console.log(this.tableRowCount)
      this.getTableData = this.tableData.splice(0, this.tableRowCount)
    }
  }
}
</script>
