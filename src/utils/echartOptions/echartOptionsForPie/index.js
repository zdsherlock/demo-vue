// 项目公共方法
import commonUtils from '@/utils/commonUtils'
// 引入echarts各参数的配置文件
import {
  getSeriesForPercentageChart,
  DEFAULT_CHART_COLOR_SET,
  defaultLegendConfig
} from './config'

// 占比图样式
export const getChartForPercentageOptions = ({
  chartData = [],
  positionConfigs,
  isShowVal
} = {}) => {
  return {
    tooltip: {
      trigger: 'item',
      formatter: item => `${item.data.name}: ${item.data.value}`
    },
    // 调色盘
    color: DEFAULT_CHART_COLOR_SET,
    // 图例
    legend: defaultLegendConfig,
    // 数据集
    dataset: { source: chartData },
    // 配置文件
    series: getSeriesForPercentageChart(positionConfigs, isShowVal)
  }
}
