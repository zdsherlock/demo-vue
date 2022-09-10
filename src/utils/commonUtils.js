/*
 * @Author: zd
 * @Date: 2022-07-19 11:23:19
 * @LastEditors: zd
 * @LastEditTime: 2022-09-08 15:18:55
 * @Description: 公共方法
 */

/**
 * @Description: 判空
 */
export const isNull = obj => {
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
}

/**
 * @Description: 数组去重
 */
export const unique = arr => Array.from(new Set(arr))

/**
 * @Description: 根据值寻找对应的对象中的key值
 * @param {*} object
 * @param {*} value
 */
export const getObjectKey = (object, value) => {
  return Object.keys(object).find(key => object[key] === value)
}
