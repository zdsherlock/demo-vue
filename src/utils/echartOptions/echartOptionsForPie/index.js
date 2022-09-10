// 项目公共方法
import commonUtils from '@/utils/commonUtils.js'
// 引入echarts各参数的配置文件
import {
  getSeriesForPercentageChart,
  legendConfigForPie,
  PIE_COLOR
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
      formatter: item =>
        `${item.data.name}：${commonUtils.formatNum(item.data.value)}`
    },
    // 调色盘
    color: PIE_COLOR,
    // 图例
    legend: legendConfigForPie,
    // 数据集
    dataset: { source: chartData },
    // 配置文件
    series: getSeriesForPercentageChart(positionConfigs, isShowVal)
  }
}
