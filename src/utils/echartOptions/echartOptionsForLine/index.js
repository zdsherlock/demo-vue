/*
 * @Author: zd
 * @Date: 2022-08-31 08:40:07
 * @LastEditors: zd
 * @LastEditTime: 2022-09-08 15:37:32
 * @Description:
 */

// 引入echarts各参数的配置文件
import {
  xAxisConfigForTrend,
  getYAxisConfig,
  getSeriesForTrendChart,
  LINE_AND_BAR_CORLOR
} from './config'
import {
  defaultLegendConfig,
  defaultGridConfig
} from '../commonEchartOptionConfig'
// 项目公共方法
import { unique } from '@/utils/commonUtils'

/**
 * @Description: 格式化月份
 */
const getFormatMonth = monthList => {
  // 添加一个月作为末尾坐标轴点
  const nextMonthIndex =
    commonMonthList.indexOf(monthList[monthList.length - 1]) + 1
  // 如果是12月则下月为次年1月，暂时仍用01表示
  const nextMonth =
    nextMonthIndex >= commonMonthList.length
      ? '01'
      : commonMonthList[nextMonthIndex]
  monthList.push(nextMonth)
  // 格式化字段并返回
  return monthList.map(month => month + '月')
}
// 常规月份数组
const commonMonthList = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12'
]

/**
 * @Description: 走势图图表样式
 */
export const getTrendChartOptions = ({
  chartData = [],
  iconNames = ['图注说明1', '图注说明2']
} = {}) => {
  return {
    // 调色盘
    color: LINE_AND_BAR_CORLOR,
    // x轴配置
    xAxis: xAxisConfigForTrend(),
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
      trigger: 'item'
    }
  }
}
