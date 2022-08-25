// 引入echarts各参数的配置文件
import {
  defaultXAxisConfig,
  defaultyAxisConfig,
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
  iconNames = ['系列1', '系列2']
} = {}) => {
  return {
    // 调色盘
    color: DEFAULT_CHART_COLOR_SET,
    // x轴配置
    xAxis: defaultXAxisConfig,
    // y轴配置
    yAxis: defaultyAxisConfig,
    // 动态数据集
    dataset: { source: chartData },
    //
    series: getSeriesForTrendChart(iconNames),
    // 图例配置
    legend: defaultLegendConfig,
    //
    grid: defaultGridConfig
  }
}
