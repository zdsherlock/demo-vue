<!--
 * @Author: zd
 * @Date: 2022-09-14 23:54:17
 * @LastEditors: zd
 * @LastEditTime: 2022-09-16 22:24:02
 * @Description: 
-->
<template>
  <div class="profit-loss data-view-panel">
    <header style="display:flex;justify-content:space-between">
      <DataViewTitle>图例6</DataViewTitle>
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
import { profitAndLossChartOptions } from '@/utils/echartOptions/echartOptionsForBar'

export default {
  name: 'DataViewPanelForBarTrend',

  components: { ChartModel, DataViewTitle, DataViewRadio },

  data () {
    return {
      // 图表配置
      chartOptions: null,
      // 初始label标签
      labelType: 'labelType',
      // 控制echarts强制刷新
      chartKey: 0
    }
  },

  methods: {
    // 初始化echarts
    initChartOption (labelType) {
      const chartLabel = []
      const curDayData = [
        chartLabel,
        ['-', 1, '-', 1, '-', 1],
        [-1, '-', -1, '-', -1, '-']
      ]
      const curYearData = [
        chartLabel,
        [1, '-', 1, 1, '-', 1],
        ['-', -1, '-', '-', -1, '-']
      ]

      switch (labelType) {
        case 'labelType':
          this.chartOptions = profitAndLossChartOptions({
            chartData: curDayData
          })
          break
        case 'labelType':
          this.chartOptions = profitAndLossChartOptions({
            chartData: curYearData
          })
          break
      }
      this.chartKey++
    },
    // 切换标签
    labelChange (labelType) {
      this.labelType = labelType
      this.initChartOption(labelType)
    }
  },

  mounted () {
    this.initChartOption(this.labelType)
  }
}
</script>
