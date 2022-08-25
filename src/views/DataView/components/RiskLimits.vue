// 盈亏走势图组件
<template>
  <div class="profit-loss-trend data-panel">
    <header style="display:flex;justify-content:space-between">
      <DataViewTitle>风险限额</DataViewTitle>
      <DataViewRadio label1="delta" label2="bega"></DataViewRadio>
    </header>
    <main
      style="margin-top:10px;display:flex;flex-wrap:wrap;justify-content:space-between;"
    >
      <RiskLimitsChartModel limitVal="3000000.00"></RiskLimitsChartModel>
      <RiskLimitsChartModel absVal="4968193.17"></RiskLimitsChartModel>
      <RiskLimitsChartModel></RiskLimitsChartModel>
      <RiskLimitsChartModel></RiskLimitsChartModel>
      <RiskLimitsChartModel absVal="3268193.17"></RiskLimitsChartModel>
      <RiskLimitsChartModel></RiskLimitsChartModel>
    </main>
  </div>
</template>

<script>
// 引入公共组件
import DataViewTitle from './DataViewTitle.vue'
import DataViewRadio from './DataViewRadio.vue'
import RiskLimitsChartModel from './RiskLimitsChartModel'

export default {
  name: 'ProfitAndLossTrend',

  components: { DataViewTitle, DataViewRadio, RiskLimitsChartModel },

  data () {
    return {}
  },

  methods: {},

  mounted () {}
}
</script>

<style lang="stylus">
.data-panel {
  background-color: #FFF;
  border-radius: 12px;
  padding: 20px 24px;
}
</style>
