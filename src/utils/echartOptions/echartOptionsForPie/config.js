// 默认颜色
export const DEFAULT_CHART_COLOR_SET = [
  '#3F7EFD',
  '#3AD2FF',
  '#00D08B',
  '#3CC4B9',
  '#C1DF07'
]

// 生成走势图的series配置
export const getSeriesForPercentageChart = () => {
  return [
    {
      type: 'pie',
      radius: ['45%', '68%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        formatter: '{d}%({@value})'
      }
    }
  ]
}
