<template>
  <div
    ref="profitLossRef"
    class="profit-loss data-view-panel"
    :style="{ 'padding-bottom': labelType === '客户' ? 0 : '20px' }"
  >
    <header style="display:flex;justify-content:space-between">
      <DataViewTitle>测试2</DataViewTitle>
      <DataViewRadio
        label1="label1"
        label2="label2"
        label3="label3"
        @labelChange="labelChange"
      ></DataViewRadio>
    </header>
    <main style="margin-top:10px">
      <ChartModel
        :chartOptions="chartOptions"
        :minHeight="labelType === 'labelType' ? 260 : 250"
        :key="chartKey"
      ></ChartModel>
    </main>
  </div>
</template>

<script>
// 引入公共组件
import ChartModel from './components/DataViewChartModel'
import DataViewTitle from './components/DataViewTitle.vue'
import DataViewRadio from './components/DataViewRadio.vue'
import { getChartForPercentageOptions } from '@/utils/echartOptions/echartOptionsForPie'

export default {
  name: 'DataViewPanelForCashDeposit',

  components: { ChartModel, DataViewTitle, DataViewRadio },

  data () {
    return {
      // 图表配置
      chartOptions: null,
      // label标签缓存
      labelType: 'labelType',
      // 用于强制刷新图表
      chartKey: 0
    }
  },

  methods: {
    // 初始化echarts
    initChartOption (labelType) {
      const chartData = this.formatChartData(labelType)
      const positionConfigs = ['50%', '40%']
      this.chartOptions = getChartForPercentageOptions({
        chartData,
        positionConfigs
      })
      this.chartKey++
    },
    // 格式化表单数据
    formatChartData (labelType) {
      const futuData = []
      const custData = []
      const plateData = []

      switch (labelType) {
        case 'labelType':
          return futuData
        case 'labelType':
          return custData
        case 'labelType':
          return plateData
      }
    },
    // 切换标签
    labelChange (val) {
      this.labelType = val
      this.initChartOption(val)
    }
  },

  mounted () {
    this.initChartOption(this.labelType)
  }
}
</script>
