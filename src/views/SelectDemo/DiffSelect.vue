<!--
 * @Author: zd
 * @Date: 2022-09-08 16:49:37
 * @LastEditors: zd
 * @LastEditTime: 2022-09-09 10:48:05
 * @Description: 业务需求：需要可以翻译的内容，并不能出现在选项中
-->

<template>
  <el-select v-model="value" placeholder="请选择"
  @change="handleSelectChange"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
      :created="item.created"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'DiffSelect',

  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭',
          disabled: true
          // created: true
        }
      ],
      value: 'placement'
    }
  },

  methods: {
    // 初始化
    initSelect () {
      const res = this.options.find(item => item.value === this.value)
      if (!res) {
        this.value = '未选中'
      }
    },
    // 
    handleSelectChange(val){
      debugger
      console.log(val)
    }
  },

  mounted () {
    this.initSelect()
  }
}
</script>

<style lang="stylus">
.el-select-dropdown__item.is-disabled{
  display: none
}
</style>
