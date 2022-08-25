// 看板-盈亏图
<template>
  <div class="profit-loss data-panel">
    <header style="display:flex;justify-content:space-between">
      <DataViewTitle>场外保证金</DataViewTitle>
      <DataViewRadio label1="标的" label2="客户" label3="行业"></DataViewRadio>
    </header>
    <main style="margin-top:10px">
      <ChartModel
        :chartOptions="chartOptions"
        :minHeight="250"
      ></ChartModel>
    </main>
  </div>
</template>

<script>
// 引入公共组件
import ChartModel from '@/components/chart/ChartModel'
import DataViewTitle from './DataViewTitle.vue'
import DataViewRadio from './DataViewRadio.vue'
import { getChartForPercentageOptions } from '@/utils/echartOptions/echartOptionsForPie'

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
        { value: 70, name: '品种名称1' },
        { value: 15, name: '品种名称2' },
        { value: 10, name: '品种名称3' },
        { value: 3, name: '品种名称4' },
        { value: 2, name: '品种名称5' }
      ]
      this.chartOptions = getChartForPercentageOptions({ chartData })
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
