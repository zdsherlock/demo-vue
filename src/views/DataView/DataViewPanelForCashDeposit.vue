<template>
  <div ref="profitLossRef" class="profit-loss data-view-panel">
    <header style="display:flex;justify-content:space-between">
      <DataViewTitle>测试1</DataViewTitle>
    </header>
    <main style="margin-top:10px">
      <div style="position:absolute;margin-top:65px;">
        <DataViewDescBox
          descTitle="descTitle"
          descVal="1"
          descUnit="亿"
        ></DataViewDescBox>
        <DataViewDescBox
          style="margin-top:20px"
          descTitle="descTitle"
          descVal="1"
          descUnit="个"
        ></DataViewDescBox>
      </div>
      <ChartModel
        :chartOptions="chartOptions"
        :minHeight="250"
        :key="chartKey"
      ></ChartModel>
    </main>
  </div>
</template>

<script>
// 引入公共组件
import ChartModel from './components/DataViewChartModel'
import DataViewTitle from './components/DataViewTitle.vue'
import DataViewDescBox from './components/DataViewDescBox'
import { getChartForPercentageOptions } from '@/utils/echartOptions/echartOptionsForPie'

export default {
  name: 'DataViewPanelForCashDeposit',

  components: { ChartModel, DataViewTitle, DataViewDescBox },

  data () {
    return {
      // 图表配置
      chartOptions: null,
      // 强制图表刷新
      chartKey: 0
    }
  },

  methods: {
    // 初始化echarts
    initChartOption () {
      const chartData = []
      const positionConfigs = ['65%', '50%']
      this.chartOptions = getChartForPercentageOptions({
        chartData,
        positionConfigs
      })
      this.chartKey++
    }
  },

  mounted () {
    this.initChartOption()
  }
}
</script>
