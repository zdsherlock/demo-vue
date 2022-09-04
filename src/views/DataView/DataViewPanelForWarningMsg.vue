<template>
  <div class="warning-msg data-view-panel">
    <DataViewTitle>图例5</DataViewTitle>

    <div style="margin-top:24px;padding-left:-10px;padding-right:-10px">
      <CommonTable
        :curHeaders="curHeaders"
        :curTableData="curTableData"
        :border="false"
        headerAlign="left"
      >
        <template v-slot:before>
          <!-- 展开列 -->
          <el-table-column type="expand" width="20px">
            <template slot-scope="props">
              <el-form label-position="left" class="table-expand" size="mini">
                <el-form-item label="label">
                  <span>{{ props.row.fullName || props.row.name }}</span>
                </el-form-item>
                <el-form-item label="label">
                  <span>{{ props.row.type }}</span>
                </el-form-item>
                <el-form-item label="label">
                  <span>{{
                    props.row.fullCondition || props.row.condition
                  }}</span>
                </el-form-item>
                <el-form-item label="label">
                  <span>{{ props.row.fullTime || props.row.time }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column></template
        >
      </CommonTable>
    </div>
  </div>
</template>

<script>
import DataViewTitle from './components/DataViewTitle.vue'
import CommonTable from '@/components/table/CommonTable'

export default {
  name: 'DataViewPanelForWarningMsg',

  components: {
    DataViewTitle,
    CommonTable
  },

  data () {
    return {
      curHeaders: [],
      curTableData: []
    }
  },

  methods: {}
}
</script>

<style lang="stylus">
.warning-msg {
  .el-table {
    .cell {
      padding-left: 5px;
      padding-right: 5px;
      font-size: 12px;
    }

    .el-table__expanded-cell {
      padding:0;
      padding-left: 5px;
    }

    .gutter {
      background-color: rgb(238, 241, 246)
    }
  }

  .table-expand {
    font-size: 0;
    label {
      width: 85px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
    }
    .el-form-item__content {
      font-size: 12px;
    }
  }
}
</style>
