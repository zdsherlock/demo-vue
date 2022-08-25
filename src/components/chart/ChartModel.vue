<template>
  <div
    ref="chartModelRef"
    class="chart-model"
    style="width:100%;height:100%;"
    :style="{
      'min-height': `${minHeight}px`
    }"
  ></div>
</template>

<script>
import * as echarts from 'echarts'
// echarts标准DOM对象
export default {
  name: 'ChartModel',

  props: {
    // 图表配置文件
    chartOptions: {
      type: Object,
      default () {
        return null
      }
    },
    // 图表最小高度
    minHeight: {
      type: Number,
      default: 200
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
