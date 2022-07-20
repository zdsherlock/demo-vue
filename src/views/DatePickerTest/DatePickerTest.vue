<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value"
      :picker-options="customPickerOptions"
      type="date"
      placeholder="选择日期"
    >
    </el-date-picker>
  </div>
</template>

<script>
// 引入工具库
import moment from 'moment'
// datapicker做标记测试
export default {
  data () {
    return {
      value: [],
      customDateArr: ['2021-2-10', '2021-3-10', '2021-4-10'], // 存放'已标记' 的日期数组

      customPickerOptions: {}
    }
  },
  computed: {},
  methods: {
    // 模拟异步获取日期
    async initCustomDate () {
      let that = this
      setTimeout(() => {
        that.customDateArr = ['2022-02-10', '2022-03-10', '2022-04-10']
        that.customPickerOptions = {
          cellClassName (time) {
            if (
              that.customDateArr.includes(moment(time).format('YYYY-MM-DD'))
            ) {
              return 'custom_date_class'
            }
          }
        }
      }, 100)
    }
  },
  async mounted () {
    await this.initCustomDate()
  }
}
</script>

<style lang="scss">
$mark: 'm';
// 日期时间选择器 已标记 样式
.custom_date_class {
  span {
    background: #ea6151;
    color: red;
    border-radius: 50%;
    color: #fff !important;
    &:hover {
      background-color: #409eff;
    }
  }
  &::after {
    content: $mark;
    display: inline-block;
    position: absolute;
    width: 100%;
    font-size: 12px;
    color: red;
    bottom: -15px;
    left: 0;
    text-align: center;
    white-space: nowrap;
  }
}
</style>
