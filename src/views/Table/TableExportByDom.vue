<template>
  <div class="container">
    <header style="text-align:right">
      <el-button
        type="primary"
        icon="el-icon-download"
        size="mini"
        @click="handleExportClick"
      >
        <a style="display:none" ref="dlink"></a>
        导出
      </el-button>
    </header>

    <main>
      <el-table :data="tableData" ref="defaultTableRef" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </main>
  </div>
</template>

<script>
// 引入工具
import { domToExcel } from '@/utils/tableExport.js'

// 表格导出
export default {
  name: 'TableExportByDom',

  components: {},

  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },

  methods: {
    handleExportClick () {
      const tableDom = this.$refs.defaultTableRef
      const fileName = '测试表格'
      const linkDom = this.$refs.dlink

      domToExcel(tableDom, fileName, linkDom)
    }
  },

  mounted () {}
}
</script>
