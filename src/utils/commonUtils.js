const commonUtils = {
  // 判空
  isNull: obj => {
    if (
      obj == null ||
      typeof obj === 'undefined' ||
      obj.toString() === '' ||
      obj.toString() === 'null' ||
      obj.toString() === 'NaN' ||
      obj.toString() === 'undefined'
    ) {
      return true
    }
    return false
  },
  // 格式化数字 加逗号 和 小数位Decimal places
  decimalMoneyFormat (num, dp) {
    if (commonUtils.isNull(num)) {
      return ''
    }
    // 乱输入直接返回原始数据
    if (isNaN(num)) {
      return num
    }
    num = Number(num)
    // 先根据小数位四舍五入处理传入数字
    if (!commonUtils.isNull(dp)) {
      const integer = num.toString().split('.')[0]
      let decimal = num.toString().split('.')[1]
      if (!commonUtils.isNull(decimal) && decimal.length >= Number(dp) + 1) {
        decimal = decimal.substring(0, Number(dp) + 1)
        decimal = decimal + '1'
        num = Number(integer + '.' + decimal)
      }
      num = Number(Number(num + '').toFixed(dp))
    }
    let numStr = Math.abs(parseInt(num + '')).toString()
    let result = ''
    // 处理整数
    while (numStr.length > 3) {
      result = ',' + numStr.slice(-3) + result
      numStr = numStr.slice(0, numStr.length - 3)
    }
    if (numStr) {
      result = numStr + result
    }
    if (num < 0) {
      result = '-' + result
    }
    if (commonUtils.isNull(dp)) {
      // 保留原有小数
      const decimal = num.toString().split('.')[1]
      !commonUtils.isNull(decimal) && (result += '.' + decimal)
      return result
    }
    if (dp === 0) {
      return result
    }
    // 处理小数
    return (
      result +
      '.' +
      num
        .toFixed(dp)
        .toString()
        .split('.')[1]
    )
  }
}

export default commonUtils
