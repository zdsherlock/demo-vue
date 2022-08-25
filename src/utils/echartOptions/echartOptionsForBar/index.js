// 引入echarts各参数的配置文件
import {
  defaultyAxisConfig,
  defaultGridConfig
} from '../commonEchartOptionConfig'

import { getSeriesForProfitAndLoss, defaultXAxisConfig } from './config'

// 盈亏图
export const profitAndLossChartOptions = ({ chartData = [] } = {}) => {
  return {
    // x轴配置
    xAxis: defaultXAxisConfig,
    // y轴配置
    yAxis: defaultyAxisConfig,
    // 动态数据集
    dataset: { source: chartData },
    //
    series: getSeriesForProfitAndLoss(),
    // 图例配置
    legend: { show: false },
    //
    grid: defaultGridConfig
  }
}
