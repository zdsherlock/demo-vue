import * as echarts from 'echarts'

import {
  defaultAxisStyle,
  defaultAxisTextStyle,
  defaultSplitLineStyle,
  defaultyAxisConfig
} from '../commonEchartOptionConfig'

// 默认颜色
export const LINE_AND_BAR_CORLOR = ['#3F7EFD', '#FDAB02', '#E2534D']
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
export const xAxisConfigForTrend = monthList => [
  {
    type: 'category',
    show: false,
    boundaryGap: false,
    axisLine: defaultAxisStyle,
    axisLabel: defaultAxisTextStyle
  },
  {
    type: 'category',
    boundaryGap: false,
    axisLine: defaultAxisStyle,
    axisLabel: defaultAxisTextStyle,
    data: monthList,
    position: 'bottom'
  }
]
// 默认y轴配置
export const getYAxisConfig = iconNames => {
  if (iconNames.length === 3) {
    return defaultyAxisConfig
  } else {
    return [
      {
        name: '当日盈亏',
        ...defaultyAxisConfig,
        nameTextStyle: { color: '#696970' }
      },
      {
        name: '累计盈亏',
        ...defaultyAxisConfig,
        nameTextStyle: { color: '#696970' }
      }
    ]
  }
}

// 生成走势图的series配置
export const getSeriesForTrendChart = iconNames => {
  // 根据业务需求展示不同图表
  if (iconNames.length === 2) {
    return [
      {
        type: 'bar',
        lineStyle: { width: 3 },
        areaStyle: { color: defaultShadowAreStyle },
        name: iconNames[0],
        showSymbol: false,
        seriesLayoutBy: 'row',
        yAxisIndex: 0
      },
      {
        type: 'line',
        seriesLayoutBy: 'row',
        name: iconNames[1],
        showSymbol: false,
        yAxisIndex: 1
      }
    ]
  } else {
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
      },
      {
        type: 'line',
        seriesLayoutBy: 'row',
        name: iconNames[2],
        showSymbol: false
      }
    ]
  }
}
