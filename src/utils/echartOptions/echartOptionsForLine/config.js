import * as echarts from 'echarts'

import {
  defaultAxisStyle,
  defaultAxisTextStyle,
  defaultSplitLineStyle
} from '../commonEchartOptionConfig'

// 默认颜色
export const DEFAULT_CHART_COLOR_SET = ['#3F7EFD', '#FDAB02']
// 默认区域线图样式
const defaultShadowAreStyle = new echarts.graphic.LinearGradient(
  // 4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
  0,
  0,
  0,
  1,
  [
    {
      offset: 0,
      color: 'rgba(136,189,255,0.50)'
    },
    {
      offset: 0.5,
      color: 'rgba(72,127,255,0.09)'
    },
    {
      offset: 1,
      color: 'rgba(58,114,255,0.00)'
    }
  ]
)

// 默认x轴配置
export const defaultXAxisConfig = {
  type: 'category',
  boundaryGap: false,
  axisLine: defaultAxisStyle,
  axisLabel: defaultAxisTextStyle
}
// 默认y轴配置
export const defaultyAxisConfig = {
  type: 'value',
  axisLine: defaultAxisStyle,
  axisLabel: defaultAxisTextStyle,
  splitLine: { lineStyle: defaultSplitLineStyle }
}

// 生成走势图的series配置
export const getSeriesForTrendChart = iconNames => {
  return [
    {
      type: 'line',
      lineStyle: { width: 3 },
      areaStyle: { color: defaultShadowAreStyle },
      name: iconNames[0],
      showSymbol: false,
      seriesLayoutBy: 'row'
    },
    {
      type: 'line',
      seriesLayoutBy: 'row',
      name: iconNames[1],
      showSymbol: false
    }
  ]
}
