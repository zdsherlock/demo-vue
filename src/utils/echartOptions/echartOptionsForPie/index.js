// 引入echarts各参数的配置文件
import { getSeriesForPercentageChart, DEFAULT_CHART_COLOR_SET } from './config'

import { defaultLegendConfig } from '../commonEchartOptionConfig'

// 占比图样式
export const getChartForPercentageOptions = ({ chartData = [] } = {}) => {
  return {
    tooltip: {
      trigger: 'item'
    },
    // 调色盘
    color: DEFAULT_CHART_COLOR_SET,
    // 图例
    legend: defaultLegendConfig,
    // 数据集
    dataset: { source: chartData },
    // 配置文件
    series: getSeriesForPercentageChart()
  }
}
