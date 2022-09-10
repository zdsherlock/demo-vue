// 引入公共库
import commonUtils from './commonUtils'

// 将数组转化为excel,利用a标签导出
export const arrayToExcel = (
  tableHeaders,
  tableData,
  linkDom,
  fileName,
  sheetName
) => {
  let tableString = '<tr>'

  const url = 'data:application/vnd.ms-excel;base64,'
  const template =
    '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'

  //
  tableHeaders.forEach(row => {
    if (commonUtils.isNull(row.property) === false) {
      if (commonUtils.isNull(row.label) === false) {
        tableString += `<td style='border-bottom:1px solid black;text-align:center'>${row.label}</td>`
      } else {
        tableString += `<td style='border-bottom:1px solid black;text-align:center'>${row.property}</td>`
      }
    }
  })

  tableString += '</tr><tr>'

  tableData.forEach(dataRow => {
    tableHeaders.forEach(columnInfo => {
      if (commonUtils.isNull(columnInfo.property) === false) {
        let txt = !commonUtils.isNull(dataRow[columnInfo.property])
          ? dataRow[columnInfo.property]
          : ''
        // 如果有则调用formatter函数格式化列
        if (columnInfo.formatter) {
          txt = columnInfo.formatter(dataRow, columnInfo, txt)
        }
        tableString += '<td style="mso-number-format:\\@;">' + txt + '</td>'
      }
    })
    tableString += '</tr><tr>'
  })

  tableString += '</tr>'

  const excel = {
    worksheet: sheetName || 'sheet',
    table: tableString
  }

  linkDom.download = `${fileName}.xls`
  linkDom.href =
    url + window.btoa(unescape(encodeURIComponent(format(template, excel))))
  linkDom.click()
}

export const format = (s, c) => {
  return s.replace(/{(\w+)}/g, function (m, p) {
    return c[p]
  })
}
