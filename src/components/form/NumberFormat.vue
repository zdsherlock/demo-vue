<template>
  <div @click.stop class="format-number">
    <el-input
      v-model="inputValue"
      v-show="begin"
      ref="elinput"
      :placeholder="inputPlaceholder"
      :size="size"
      @change="updateValue"
      @blur="beginOff"
    >
    </el-input>
    <div
      v-show="!begin"
      v-if="!inputDisabled"
      class="format-div"
      @click.stop="beginOn"
    >
      <span>{{ formatValue }}</span>
      <span class="format-str">{{ formatStr }}</span>
      <span v-show="isShowHolder">{{ inputPlaceholder }}</span>
    </div>
    <div class="format-div disable" v-show="!begin" v-else>
      <span>{{ formatValue }}</span>
      <span class="format-str">{{ formatStr }}</span>
      <span v-show="isShowHolder">{{ inputPlaceholder }}</span>
    </div>
  </div>
</template>

<script>
import commonUtils from '@/utils/commonUtils.js'
// 格式化金额的输入框
export default {
  name: 'NumberFormat',
  components: {},
  props: {
    // 表单是否可修改
    disabled: {
      type: Boolean,
      default: false
    },
    // 提示默认值
    placeholder: {
      type: String,
      default: ''
    },
    // 格式化文字
    hint: {
      type: String,
      default: ''
    },
    // 组件大小
    size: {
      type: String,
      default: 'mini'
    },
    // 具体数值
    value: {
      type: [String, Number],
      default: ''
    },
    // 保留小数位
    dp: {
      type: [Number],
      default: 2
    }
  },
  data () {
    return {
      // 是否可以编辑
      inputDisabled: this.disabled,
      // 用于存储的数据
      inputValue: this.value,
      // 提示语
      inputPlaceholder: this.placeholder,

      // 控制是否显示 input
      begin: false
    }
  },

  computed: {
    // 计算属性显示格式化后的金额数据
    formatValue () {
      const number = this.inputValue
      if (commonUtils.isNull(number) || isNaN(number)) {
        return number
      } else {
        return commonUtils.formatNum(Number(this.inputValue), this.dp)
      }
    },

    formatStr () {
      const str = this.hint
      if (commonUtils.isNull(str)) {
        return this.hint
      } else {
        return `（${str}）`
      }
    },
    // 是否显示提示语
    isShowHolder () {
      if (this.commonUtils.isNull(this.inputValue)) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    value (val) {
      if (val != this.inputValue) {
        this.inputValue = val
      }
    }
  },
  methods: {
    // 向父级更新数据方法
    updateValue (inputValue) {
      let inputValueFormat = inputValue
      // 判断是否为千分位数值
      const reg = /^(\d{1,3}(,\d\d\d)*(\.\d+)?|\d+(\.\d+)?)$/
      if (reg.test(inputValue)) {
        const arr = inputValue.split(',')
        inputValueFormat = arr.reduce((pre, cur) => pre + cur, '')
      }

      if (isNaN(inputValueFormat)) {
        this.$emit('update:value', inputValueFormat)
      } else {
        let num = this.commonUtils.isNull(inputValueFormat)
          ? null
          : Number(inputValueFormat)
        this.$emit('update:value', num)
      }

      this.begin = false
    },
    // 开始修改数据
    beginOn () {
      this.begin = true
      this.$nextTick(() => {
        this.$refs.elinput.focus()
      })
    },
    // 结束修改数据
    beginOff () {
      this.begin = false
    }
  }
}
</script>
<style lang="stylus">
.format-number{
    height: 28px;
    line-height: 28px;

    .format-div {
				border: 1px solid #DCDFE6;
				border-radius: 4px;
        width: 100%;
        height: 100%;
        padding: 0 15px;
        font-size: 12px;
        box-sizing: border-box;
				cursor: pointer;

				.format-str {
					color:#C0C4CC
				}
    }

		input{
				height: 100%
		}

    .disable {
        background: rgb(245, 247, 250);
        color: rgb(192, 196, 204);
				cursor: not-allowed;
    }
}
</style>
