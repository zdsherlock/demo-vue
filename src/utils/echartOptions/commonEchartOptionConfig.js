// 通用表格样式
const DEFAULT_LINE_STYLE_COLOR = '#E1E1E5'
const DEFAULT_AXIS_LABEL_COLOR = '#9B9BA5'
const DEFAULT_AXIS_FONT_SIZE = 10
export const DEFAULT_ICON_SIZE = 12

// 默认坐标轴样式配置
export const defaultAxisStyle = {
  show: true,
  lineStyle: { color: DEFAULT_LINE_STYLE_COLOR }
}
// 默认坐标轴文字样式
export const defaultAxisTextStyle = {
  color: DEFAULT_AXIS_LABEL_COLOR,
  fontSize: DEFAULT_AXIS_FONT_SIZE
}
// 默认网格线样式
export const defaultSplitLineStyle = {
  color: DEFAULT_LINE_STYLE_COLOR,
  width: 0.5,
  type: [5, 5],
  dashOffset: 5
}
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
// 默认图例配置
export const defaultLegendConfig = {
  icon: 'roundRect',
  itemWidth: DEFAULT_ICON_SIZE,
  itemHeight: DEFAULT_ICON_SIZE,
  top: 'bottom',
  itemGap: 18,
  // 让icon和文本对齐
  formatter: ['{a|{name}}'].join('\n'),
  textStyle: {
    height: 8,
    rich: {
      a: {
        verticalAlign: 'bottom'
      }
    }
  }
}
// 默认网格位置配置
export const defaultGridConfig = { top: 10, left: 30, right: 20, bottom: 50 }
