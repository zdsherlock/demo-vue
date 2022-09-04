<template>
  <div class="profit-loss-trend data-view-panel">
    <header style="display:flex;justify-content:space-between">
      <DataViewTitle>{{ curLabel }}图例3</DataViewTitle>
      <DataViewRadio
        label1="label1"
        label2="label2"
        @labelChange="labelChange"
      ></DataViewRadio>
    </header>
    <main style="margin-top:10px">
      <ChartModel :chartOptions="chartOptions" :key="chartKey"></ChartModel>
    </main>
  </div>
</template>

<script>
// 引入公共组件
import ChartModel from './components/DataViewChartModel'
import DataViewTitle from './components/DataViewTitle.vue'
import DataViewRadio from './components/DataViewRadio.vue'
import { getTrendChartOptions } from '@/utils/echartOptions/echartOptionsForLine'
// 引入测试数据

export default {
  name: 'DataViewPanelForProfitAndLossTrend',

  components: { ChartModel, DataViewTitle, DataViewRadio },

  data () {
    return {
      // 图表配置
      chartOptions: null,
      // 当前标签
      curLabel: 'curLabel',
      // 用于强制刷新echarts
      chartKey: 0
    }
  },

  methods: {
    // 初始化echarts
    initChartOption (val) {
      const iconNames =
        val === 'curLabel'
          ? ['curLabel1', 'curLabel2']
          : ['curLabel1', 'curLabel2', 'curLabel3']
      const chartData = this.formatChartData(val)
      this.chartOptions = getTrendChartOptions({ chartData, iconNames })
      this.chartKey++
    },
    // label切换事件
    labelChange (val) {
      this.curLabel = val
      this.initChartOption(val)
    },
    // 格式化图表数据
    formatChartData (curLabel) {
      const dates = []

      profitRes.data.forEach(ele => {
        dates.push(ele.business_date)
        totalIncomes.push(ele.total_income)
        todayIncomes.push(ele.today_income)
        totalNotion.push(ele.total_notional_principal.toString())
        commoNotion.push(ele.commo_notional_principal.toString())
        equityNotion.push(ele.equity_notional_principal.toString())
      })
      const profitData = [dates, todayIncomes, totalIncomes]
      const notionData = [dates, totalNotion, commoNotion, equityNotion]

      switch (curLabel) {
        case 'curLabel':
          return profitData
        case 'curLabel':
          return notionData
      }
    }
  },

  mounted () {
    this.initChartOption(this.curLabel)
  }
}
</script>
