<template>
  <div class="data-view">
    this is data-view
    <ChartModel :chartOptions="chartOptions"></ChartModel>
    <ChartModel :chartOptions="chartOptionsSec"></ChartModel>
    <div style="width:5px;height:300px;background-color:#3F7EFD"></div>
  </div>
</template>

<script>
import ChartModel from '@/components/chart/ChartModel'
import * as echarts from 'echarts'

// 数据看板样式
export default {
  name: 'DataView',

  data () {
    return {
      // echarts配置文件
      chartOptions: null,
      chartOptionsSec: null
    }
  },

  components: {
    ChartModel
  },

  methods: {
    // 初始化echarts
    initChartOption () {
      this.chartOptions = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
      this.chartOptionsSec = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },

        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            lineStyle: {
              color: '#3F7EFD'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(136,189,255,0.50)'
                },
                {
                  offset: 1,
                  color: 'rgba(136,189,255,0.00)'
                }
              ])
            }
          }
        ]
      }
    }
  },

  mounted () {
    this.initChartOption()
  }
}
</script>
