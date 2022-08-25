<template>
  <div class="data-view">
    <ProfitAndLossTrend></ProfitAndLossTrend>
    <ProfitAndLoss></ProfitAndLoss>
    <RiskLimits></RiskLimits>
    <OtcCashDeposit></OtcCashDeposit>
  </div>
</template>

<script>
import ProfitAndLossTrend from './components/ProfitAndLossTrend'
import ProfitAndLoss from './components/ProfitAndLoss'
import RiskLimits from './components/RiskLimits'
import OtcCashDeposit from './components/OtcCashDeposit'

// 数据看板样式
export default {
  name: 'DataView',

  data () {
    return {
      // echarts配置文件
      chartOptions: null
    }
  },

  components: { ProfitAndLossTrend, ProfitAndLoss, RiskLimits, OtcCashDeposit },

  methods: {},

  mounted () {}
}
</script>

<style lang="stylus">
.data-view {
  background-color: #f7f7fa;
  height: 100%;
  // temp
  padding: 20px;
}
</style>
