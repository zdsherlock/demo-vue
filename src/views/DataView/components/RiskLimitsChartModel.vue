<template>
  <div class="risk-limits-chart-model">
    <div class="chart-title">农产品</div>
    <div class="chart-label">
      <div class="abs-label">
        <span class="abs-val">{{
          commonUtils.decimalMoneyFormat(absVal, 2)
        }}</span>
        <span class="abs-desc">{{ absDesc }}</span>
      </div>
      <div class="limit-label">
        <span class="limit-val">{{
          commonUtils.decimalMoneyFormat(limitVal, 2)
        }}</span>
        <span class="limit-desc">{{ limitDesc }}</span>
      </div>
    </div>
    <div class="chart-model" style="margin-top:13px">
      <div class="limit-bar"></div>
      <div class="abs-bar" :class="absStatus" :style="{ width: absLen }">
        <div :class="absStatus" class="abs-bar-icon">
          <div class="abs-bar-icon-desc">
            <span>{{ iconDesc }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 绘制风险限额线性比例图
export default {
  name: 'RiskLimitsChartModel',

  props: {
    absVal: {
      type: String,
      default () {
        return '4068193.17'
      }
    },
    limitVal: {
      type: String,
      default () {
        return '6000000.00'
      }
    },
    // 类型
    labelType: {
      type: String,
      default: 'Delta'
    }
  },

  computed: {
    // 根据绝对值和限额的比例，计算状态返回
    absStatus () {
      const percentVal = (this.absVal / this.limitVal) * 100
      // 0-80蓝色  80-100 橙色  超过100就红色
      if (percentVal < 80) {
        return 'safe'
      } else if (percentVal < 100) {
        return 'warning'
      } else {
        return 'danger'
      }
    },
    // 根据绝对值和限额的比例，计算状态返回
    iconDesc () {
      const percent = this.absVal / this.limitVal
      if (percent > 1) {
        return '超额'
      } else {
        return `${(percent * 100).toFixed(1)}%`
      }
    },
    // 根据绝对值和限额的比例，计算绝对值柱图长度
    absLen () {
      const percent = this.absVal / this.limitVal
      // 最长不超过100
      if (percent > 1) {
        return 1
      } else {
        return `${(percent * 100).toFixed(1)}%`
      }
    },
    // 根据标签类型切换描述文字
    absDesc () {
      return `${this.labelType}敞口金额绝对值`
    },
    limitDesc () {
      return `${this.labelType}敞口限额`
    }
  },

  mounted () {}
}
</script>

<style lang="stylus">
.risk-limits-chart-model {
  min-height: 80px;
  min-width: 250px;
  margin: 20px 0;
  .chart-title {
    font-size: 12px;
    color: #43434A;
    font-weight: bold;
  }


  .chart-label {
    display: flex;
    justify-content: space-between

    // 标签的值
    .abs-label, .limit-label {
      // font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 14px;
    }
    // 描述文字
    .abs-desc, .limit-desc {
      font-size: 11px;
      color:#696970;
      text-align: right
    }
    // 数值样式
    .abs-val, .limit-val {
    }
  }
  // 柱状图
  .chart-model{
    position:relative
    width: 100%
    .limit-bar, .abs-bar {
      position: absolute;
      width: 100%;
      height: 6px
      background-color: #F2F2F5
      border-radius: 4px
    }
    // 安全色
    .safe {
      background-color: #3F7EFD
      box-shadow: 0px 2px 4px 0px rgba(63,126,253,0.3)
    }
    // 警告色
    .warning {
      background-color: #FA6400
      box-shadow: 0px 2px 4px 0px rgba(253,139,63,0.3)
    }
    // 危险色
    .danger {
      background-color: #E2534D
      box-shadow: 0px 2px 4px 0px rgba(226,83,77,0.3)
    }
    .abs-bar-icon {
      position: absolute;
      width: 40px;
      height: 17px;
      border: 2px solid #FFF
      border-radius: 12px;
      right:-10px;
      top: -7px;
      text-align: center
      line-height: 18px
    }
    .abs-bar-icon-desc {
      font-size: 10px;
      transform: scale(0.84)
      color: #FFF;
    }
  }
}
</style>
