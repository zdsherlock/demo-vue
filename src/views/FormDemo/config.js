/*
 * @Author: zd
 * @Date: 2022-09-13 15:20:27
 * @LastEditors: zd
 * @LastEditTime: 2022-09-13 16:13:23
 * @Description: form配置文件
 */

import dictionariesMap from '@/utils/commonDic.js'

export default [
  {
    type: 'el-input',
    label: '活动名称',
    formKey: 'activityName',
    value: ''
  },
  {
    type: 'el-select',
    label: '活动地点',
    formKey: 'activityName',
    value: '',
    selectOptions: dictionariesMap.Province
  }
]
