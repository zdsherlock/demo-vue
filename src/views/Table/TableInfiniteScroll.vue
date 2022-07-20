// 测试el-ui中el-table和InfiniteScroll指令的应用
<template>
  <div style="height:100%">
    <CommonTable
      :curHeaders="tableHeaderArray"
      :curTableData="tableDataArray"
      :isInfiniteScroll="true"
      ref="mainTable"
    ></CommonTable>
  </div>
</template>

<script>
import CommonTable from '@/components/table/CommonTable.vue'
export default {
  name: 'TableInfiniteScroll',

  components: { CommonTable },

  data () {
    return {
      testData: { testVal: '测试数据' },
      tableHeaderArray: [{ prop: 'testVal', label: '测试数据' }]
    }
  },

  computed: {
    tableDataArray () {
      const arr = []
      let i = 0
      while (i < 100) {
        arr.push(this.testData)
        i++
      }
      return arr
    }
  }
}
</script>
