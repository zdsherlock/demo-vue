import { DEFAULT_ICON_SIZE } from '../commonEchartOptionConfig'
// 默认颜色
export const DEFAULT_CHART_COLOR_SET = [
  '#3F7EFD',
  '#3AD2FF',
  '#00D08B',
  '#3CC4B9',
  '#C1DF07',
  '#FDAB02',
  '#FA6400'
]
// 数值中文化缩略
const numCapital = num => {
  if (isNaN(num)) return num
  let nums = Number(num)
  if (nums >= 10000000 || nums <= -10000000) {
    return nums / 100000000 + '亿'
  } else {
    return nums / 10000 + '万'
  }
}
// 默认图例配置
export const defaultLegendConfig = {
  icon: 'roundRect',
  itemWidth: DEFAULT_ICON_SIZE,
  itemHeight: DEFAULT_ICON_SIZE,
  top: 'bottom',
  itemGap: 18,
  // 4字以上的中文字符省略
  formatter: name => {
    const chsReg = /^[\u4e00-\u9fa5]{0,}$/g
    if (chsReg.test(name)) {
      const formatName = name.length > 4 ? name.substring(0, 4) + '...' : name
      return `${formatName}\n`
    } else {
      return `${name}\n`
    }
  },
  tooltip: { show: true, trigger: 'item' },
  textStyle: {
    height: 0,
    lineHeight: 0,
    rich: { a: { verticalAlign: 'bottom' } }
  }
}

// 生成走势图的series配置
export const getSeriesForPercentageChart = (
  positionConfigs = ['50%', '50%'],
  isShowVal = false
) => {
  return [
    {
      type: 'pie',
      radius: ['40%', '60%'],
      itemStyle: { borderColor: '#fff', borderWidth: 2 },
      center: positionConfigs,
      label: {
        formatter: ({ data, percent }) =>
          isShowVal ? `${percent}%(${numCapital(data.value)})` : `${percent}%`
      }
    }
  ]
}
