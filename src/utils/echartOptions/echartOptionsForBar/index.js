/*
 * @Author: zd
 * @Date: 2022-08-31 08:40:07
 * @LastEditors: zd
 * @LastEditTime: 2022-09-05 15:21:30
 * @Description: 
 */
// 引入echarts各参数的配置文件
import { defaultyAxisConfig } from '../commonEchartOptionConfig'

import {
  getSeriesForProfitAndLoss,
  xAxisConfigForBar,
  defaultGridConfig
} from './config'

/**
 * @Description: 柱状盈亏图配置
 */
export const profitAndLossChartOptions = ({ chartData = [] } = {}) => {
  return {
    // x轴配置
    xAxis: xAxisConfigForBar,
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
