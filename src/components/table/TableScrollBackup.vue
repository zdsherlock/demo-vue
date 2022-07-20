// 监听table的滚动事件
<template>
  <el-table
    size="mini"
    :height="height"
    highlight-current-row
    v-loading="loading"
    v-loadmore="loadMore"
    :data="tableData"
  >
    <slot></slot>
    <template slot="append">
      <div class="no-more">
        我~是有底线的 (～￣▽￣)～
      </div>
    </template>
  </el-table>
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
  props: {
    // 服务端列表数据接口名称
    url: {
      type: String,
      required: true
    },
    // 服务端列表数据接口请求参数
    params: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      tableData: [],
      loading: false,
      total: 0
    }
  },
  created () {
    this.limit = this.params.limit ? this.params.limit : 8
    this.offset = this.params.offset ? this.params.offset : 0
    // 根据单元格最小高度计算表格高度
    this.height = this.limit * 45
    this.append(this.params)
  },
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
      const newOffset = this.offset + this.limit
      if (newOffset < this.total && !this.loading) {
        this.offset = newOffset
        this.append(this.params)
      }
    }
  }
}
</script>
