// el-table自定义右键demo

<template>
  <div @click="handleClick" style="height:100%">
    <CommonTable
      :curHeaders="curHeaders"
      :curTableData="curTableData"
      :key="tableKey"
      @handleRightClick="handleRightClick"
    ></CommonTable>
    <CustMenu
      v-show="isShowMenu"
      :curHeaders.sync="curHeaders"
      :style="{ left: leftByClick, top: topByClick }"
    ></CustMenu>
  </div>
</template>

<script>
import CommonTable from '@/components/table/CommonTable'
import CustMenu from '@/components/CustMenu'

export default {
  name: 'CustRightClickForTable',

  components: { CommonTable, CustMenu },

  data () {
    return {
      curHeaders: [
        { label: 'test1', prop: 'test1', minWidth: 100 },
        { label: 'test2', prop: 'test2', minWidth: 100 },
        { label: 'test3', prop: 'test3', minWidth: 100 },
        { label: 'test4', prop: 'test4', minWidth: 100 },
        { label: 'test5', prop: 'test5', minWidth: 100 },
        { label: 'test6', prop: 'test6', minWidth: 100 },
        { label: 'test7', prop: 'test7', minWidth: 100 },
        { label: 'test8', prop: 'test8', minWidth: 100 },
        { label: 'test9', prop: 'test9', minWidth: 100 },
        { label: 'test10', prop: 'test10', minWidth: 100 },
        { label: 'test11', prop: 'test11', minWidth: 100 },
        { label: 'test12', prop: 'test12', minWidth: 100 },
        { label: 'test13', prop: 'test13', minWidth: 100 }
      ],
      curHeadersShow: [
        { label: 'test1', prop: 'test1', minWidth: 100 },
        { label: 'test2', prop: 'test2', minWidth: 100 },
        { label: 'test3', prop: 'test3', minWidth: 100 },
        { label: 'test4', prop: 'test4', minWidth: 100 },
        { label: 'test5', prop: 'test5', minWidth: 100 },
        { label: 'test6', prop: 'test6', minWidth: 100 },
        { label: 'test7', prop: 'test7', minWidth: 100 },
        { label: 'test8', prop: 'test8', minWidth: 100 },
        { label: 'test9', prop: 'test9', minWidth: 100 },
        { label: 'test10', prop: 'test10', minWidth: 100 },
        { label: 'test11', prop: 'test11', minWidth: 100 },
        { label: 'test12', prop: 'test12', minWidth: 100 },
        { label: 'test13', prop: 'test13', minWidth: 100 }
      ],
      curTableData: [
        {
          test1: 'test1',
          test2: 'test2',
          test3: 'test3',
          test4: 'test4',
          test5: 'test5',
          test6: 'test6',
          test7: 'test7'
        },
        {
          test1: 'test1',
          test2: 'test2',
          test3: 'test3',
          test4: 'test4',
          test5: 'test5',
          test6: 'test6',
          test7: 'test7'
        },
        {
          test1: 'test1',
          test2: 'test2',
          test3: 'test3',
          test4: 'test4',
          test5: 'test5',
          test6: 'test6',
          test7: 'test7'
        },
        {
          test1: 'test1',
          test2: 'test2',
          test3: 'test3',
          test4: 'test4',
          test5: 'test5',
          test6: 'test6',
          test7: 'test7'
        }
      ],
      // 控制右键菜单显示
      isShowMenu: false,
      // 强制刷新table
      tableKey: 0,
      // 菜单位置
      leftByClick: 0,
      topByClick: 0
    }
  },

  watch: {
    curHeaders: {
      handler () {
        this.tableKey++
      },
      deep: true
    }
  },

  methods: {
    // 右键点击事件
    handleRightClick (column, event) {
      this.leftByClick = `${event.clientX}px`
      this.topByClick = `${event.clientY}px`
      this.isShowMenu = true
    },
    // 窗体点击事件
    handleClick () {
      this.isShowMenu = false
    }
  }
}
</script>
