<template>
  <div>
    <el-select v-model="type" placeholder="请选择" @change="handleChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
// 计算属性测试
export default {
  name: 'computedTest',

  data () {
    return {
      firstArr: [],
      secondArr: [],
      thirdArr: [],
      type: 1,

      options: [
        { label: 1, value: 'firstArr' },
        { label: 2, value: 'secondArr' },
        { label: 3, value: 'thirdArr' }
      ]
    }
  },

  computed: {
    myArr: {
      get () {
        return this[`${this.type}`]
      },
      set (val) {
        this[`${this.type}`] = val
      }
    }
  },

  methods: {
    handleChange (val) {
      this.myArr.push(`这是第${val}个`)
    }
  }
}
</script>
