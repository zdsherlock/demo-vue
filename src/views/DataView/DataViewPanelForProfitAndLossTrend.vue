<!--
 * @Author: zd
 * @Date: 2022-08-30 16:00:33
 * @LastEditors: zd
 * @LastEditTime: 2022-09-14 13:52:52
 * @Description: 趋势图业务处理页面
-->
<template>
  <div class="profit-loss-trend data-view-panel">
    <header style="display:flex;justify-content:space-between">
      <DataViewTitle>{{ labelType }}图例3</DataViewTitle>
      <DataViewRadio
        :label1="labelMap.label1"
        :label2="labelMap.label2"
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

export default {
  name: 'DataViewPanelForProfitAndLossTrend',

  components: { ChartModel, DataViewTitle, DataViewRadio },

  data () {
    return {
      // 图表配置
      chartOptions: null,
      // 缓存当前所选中的标签
      labelType: 'label1',
      // 用于强制刷新echarts
      chartKey: 0,
      // 配置当前radio的标签映射
      labelMap: { label1: '测试1', label2: '测试2' },
      // label对应情况下的图表数据
      label1Data: [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8]
      ],
      label2Data: [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8]
      ]
    }
  },

  methods: {
    // 初始化echarts
    initChartOption () {
      const iconNames = []
      // 原始数据的切换
      let originData = null
      if (this.labelType === '测试1') originData = label1Data
      if (this.labelType === '测试2') originData = label2Data
      // 图表所需数据的格式化
      const chartData = this.formatOriginData(originData)

      this.chartOptions = getTrendChartOptions({ chartData, iconNames })
      this.chartKey++
    },
    // label切换事件
    labelChange (labelType) {
      this.labelType = labelType
      this.initChartOption()
    },
    /**
     * @Description: 根据需求将原始数据转化为图表所需格式的数据
     * @param {*} originData
     */
    formatOriginData (originData) {
      return originData
    }
  },

  mounted () {
    this.initChartOption()
  }
}
</script>
