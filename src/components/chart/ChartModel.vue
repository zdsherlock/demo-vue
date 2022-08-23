<template>
  <div
    ref="chartModelRef"
    class="chart-model"
    style="width:100%;height:100%;min-height:250px"
  ></div>
</template>

<script>
import * as echarts from 'echarts'
// echarts标准DOM对象
export default {
  name: 'ChartModel',

  props: {
    chartOptions: {
      type: Object,
      default () {
        return null
      }
    }
  },

  methods: {
    // 初始化echarts的DOM
    initChartModel () {
      this.$nextTick(() => {
        const chartDom = this.$refs.chartModelRef
        const myChart = echarts.init(chartDom)
        this.chartOptions && myChart.setOption(this.chartOptions)
      })
    }
  },

  mounted () {
    this.initChartModel()
  }
}
</script>
