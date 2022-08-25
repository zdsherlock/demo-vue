// 看板-盈亏图
<template>
  <div class="profit-loss data-panel">
    <header style="display:flex;justify-content:space-between">
      <DataViewTitle>盈亏图</DataViewTitle>
      <DataViewRadio label1="本日" label2="本年"></DataViewRadio>
    </header>
    <main style="margin-top:10px">
      <ChartModel :chartOptions="chartOptions"></ChartModel>
    </main>
  </div>
</template>

<script>
// 引入公共组件
import ChartModel from '@/components/chart/ChartModel'
import DataViewTitle from './DataViewTitle.vue'
import DataViewRadio from './DataViewRadio.vue'
import { profitAndLossChartOptions } from '@/utils/echartOptions/echartOptionsForBar'

export default {
  name: 'ProfitAndLoss',

  components: { ChartModel, DataViewTitle, DataViewRadio },

  data () {
    return {
      // 图表配置
      chartOptions: null
    }
  },

  methods: {
    // 初始化echarts
    initChartOption () {
      const chartData = [
        ['商品类', '个股类', '股指类', '项目类', '自营', '手续费\n（券息）'],
        [-1200, 800, 1500, 300, 1200, -500]
      ]
      this.chartOptions = profitAndLossChartOptions({ chartData })
    }
  },

  mounted () {
    this.initChartOption()
  }
}
</script>

<style lang="stylus">
.data-panel {
  background-color: #FFF;
  border-radius: 12px;
  padding: 20px 24px;
}
</style>
