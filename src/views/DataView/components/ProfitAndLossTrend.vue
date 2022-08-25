// 盈亏走势图组件
<template>
  <div class="profit-loss-trend data-panel">
    <header style="display:flex;justify-content:space-between">
      <DataViewTitle>盈亏走势图</DataViewTitle>
      <DataViewRadio label1="盈亏" label2="规模"></DataViewRadio>
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
import { getTrendChartOptions } from '@/utils/echartOptions/echartOptionsForLine'

export default {
  name: 'ProfitAndLossTrend',

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
        ['01.01', '02.01', '03.01', '05.01', '06.01', '07.01'],
        [200, 300, 200, 300, 359, 259],
        [259, 200, 300, 359, 300, 200]
      ]
      this.chartOptions = getTrendChartOptions({ chartData })
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
