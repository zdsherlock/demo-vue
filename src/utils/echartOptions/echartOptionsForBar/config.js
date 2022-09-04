// 图表公共配置文件
import {
  defaultAxisStyle,
  defaultAxisTextStyle
} from '../commonEchartOptionConfig'
// 项目公共方法
import commonUtils from '@/utils/commonUtils'

// 默认x轴配置
export const defaultXAxisConfig = {
  type: 'category',
  axisLine: defaultAxisStyle,
  axisLabel: { ...defaultAxisTextStyle, lineHeight: 15 }
}

// 网格位置配置
export const defaultGridConfig = { top: 20, left: 60, right: 20, bottom: 50 }

// 生成走势图的series配置
export const getSeriesForProfitAndLoss = () => {
  return [
    {
      name: 'profit',
      type: 'bar',
      seriesLayoutBy: 'row',
      barWidth: 11,
      itemStyle: { color: '#E2534D' },
      label: {
        show: true,
        color: '#43434A',
        fontSize: 10,
        position: 'top',
        // 按照入参结构，数组第二位是本系列
        formatter: val => commonUtils.decimalMoneyFormat(val.data[1], 0)
      }
    },
    {
      name: 'loss',
      type: 'bar',
      seriesLayoutBy: 'row',
      barWidth: 11,
      itemStyle: { color: '#5AB778' },
      label: {
        show: true,
        color: '#43434A',
        fontSize: 10,
        position: 'bottom',
        // 按照入参结构，数组第三位是本系列
        formatter: val => commonUtils.decimalMoneyFormat(val.data[2], 0)
      }
    }
  ]
}
