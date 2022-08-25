import {
  defaultAxisStyle,
  defaultAxisTextStyle
} from '../commonEchartOptionConfig'

// 默认x轴配置
export const defaultXAxisConfig = {
  type: 'category',
  axisLine: defaultAxisStyle,
  axisLabel: { ...defaultAxisTextStyle, lineHeight: 15 }
}

// 生成走势图的series配置
export const getSeriesForProfitAndLoss = () => {
  return [
    {
      type: 'bar',
      seriesLayoutBy: 'row',
      barWidth: 11,
      itemStyle: {
        color ({ data }) {
          // dataset的数据结构，目前配置的数据的位置
          const valueNum = 1
          return data[valueNum] > 0 ? '#E2534D' : '#5AB778'
        }
      }
    }
  ]
}
