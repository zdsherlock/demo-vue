<template>
  <div class="index-box">
    <div class="index-title">{{ indexTitle }}</div>
    <div class="index-val">
      {{ commonUtils.decimalMoneyFormat(indexValue, 2) }}
    </div>
    <div v-if="indexLabel" class="index-desc">
      <div class="index-desc-label">{{ indexLabel }}</div>
      <div
        class="index-desc-pct"
        :class="ptcStatus"
        :style="{ color: colorByStatus }"
      >
        {{ indexPCT }}
        <span v-show="!isNaN(indexPCT)">%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataViewIndexBox',

  props: {
    // 指标标题
    indexTitle: {
      type: String,
      default: '本年开仓合同'
    },
    // 指标的值
    indexValue: {
      type: Number,
      default: 234543
    },
    // 指标的描述
    indexLabel: {
      type: String,
      default: '上年同期对比'
    },
    // 指标浮动比例
    indexPCT: {
      type: String,
      default: '-3.358'
    }
  },

  computed: {
    // 计算浮动比例的状态 涨或跌
    ptcStatus () {
      if (this.indexPCT > 0) {
        return 'ptc-up'
      } else {
        return 'ptc-down'
      }
    },
    // 计算颜色
    colorByStatus () {
      if (this.indexPCT > 0) {
        return '#E2534D'
      } else {
        return '#5AB778'
      }
    }
  }
}
</script>

<style lang="stylus">
.index-box {
  font-family: 'PingFangSC';
  .index-title {
    font-weight: 400;
    font-size: 12px;
    color:#43434A;
  }
  .index-val {
    color:#28282D;
    font-size: 30px;
  }
  .index-desc {
    display: flex
  }
  .index-desc-label {
    color: #9B9BA5
    font-size: 12px
  }
  .index-desc-pct {
    display: flex;
    align-items: center;
  }
  .ptc-up: {
    display:none
  }
  .ptc-down: {
    display: none
  }
  .ptc-up::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    background-color:#FFF
    border-left: 6px solid #FFF;
    border-right: 6px solid #FFF;
    border-bottom: 6px solid #E2534D;
    margin-left: 4px;
    margin-right: 4px;
  }
  .ptc-down::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    background-color:#FFF
    border-left: 6px solid #FFF;
    border-right: 6px solid #FFF;
    border-top: 6px solid #5AB778;
    margin-left: 4px;
    margin-right: 4px;
    margin-bottom: 4px;
  }
}
</style>
