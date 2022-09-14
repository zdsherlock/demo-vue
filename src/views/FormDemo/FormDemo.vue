<!--
 * @Author: zd
 * @Date: 2022-09-13 09:14:04
 * @LastEditors: zd
 * @LastEditTime: 2022-09-13 15:53:22
 * @Description: 自定义form的实例页面
-->

<template>
  <div style="padding:20px">
    <el-form label-width="100px" label-position="left" size="mini">
      <formItem
        v-for="item in config"
        :item-config="item"
        :key="item.itemKey"
      ></formItem>
    </el-form>
  </div>
</template>

<script>
import formItem from './FormItem.vue'
import config from './config'

export default {
  name: 'FormDemo',

  components: { formItem },

  data () {
    return {
      config
    }
  }
}
</script>
