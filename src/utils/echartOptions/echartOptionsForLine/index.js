// 引入echarts各参数的配置文件
import {
  defaultXAxisConfig,
  getYAxisConfig,
  getSeriesForTrendChart,
  DEFAULT_CHART_COLOR_SET
} from './config'

import {
  defaultLegendConfig,
  defaultGridConfig
} from '../commonEchartOptionConfig'

// 走势图图表样式
export const getTrendChartOptions = ({
  chartData = [],
  iconNames = ['图注说明1', '图注说明2']
} = {}) => {
  return {
    // 调色盘
    color: DEFAULT_CHART_COLOR_SET,
    // x轴配置
    xAxis: defaultXAxisConfig,
    // y轴配置
    yAxis: getYAxisConfig(iconNames),
    // 动态数据集
    dataset: { source: chartData },
    //
    series: getSeriesForTrendChart(iconNames),
    // 图例配置
    legend: defaultLegendConfig,
    //
    grid: defaultGridConfig,
    tooltip: {
      trigger: 'item',
      formatter: item => {
        return `${item.data[0]}<br/>当日盈亏：${item.data[1]}<br/>累计盈亏：${item.data[2]}`
      }
    }
  }
}
