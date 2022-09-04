<template>
  <div class="profit-loss-trend data-panel">
    <header style="display:flex;justify-content:space-between">
      <DataViewTitle>图例4</DataViewTitle>
      <DataViewRadio
        label1="Delta"
        label2="Vega"
        @labelChange="labelChange"
      ></DataViewRadio>
    </header>
    <main style="margin-top:10px;">
      <div class="chart-model-box">
        <RiskLimitsChartModel
          v-for="(model, i) in riskLimitsData"
          :labelType="labelType"
          :plate="model.plate"
          :absVal="model.abs"
          :limitVal="model.limit"
          :key="i"
        ></RiskLimitsChartModel>
      </div>
    </main>
  </div>
</template>

<script>
// 引入公共组件
import DataViewTitle from './components/DataViewTitle.vue'
import DataViewRadio from './components/DataViewRadio.vue'
import RiskLimitsChartModel from './components/RiskLimitsChartModel'

export default {
  name: 'DataViewPanelForRiskLimits',

  components: { DataViewTitle, DataViewRadio, RiskLimitsChartModel },

  data () {
    return {
      // 标签类型
      labelType: 'Delta'
    }
  },

  computed: {
    // 根据类型切换给到和类型匹配的数据
    riskLimitsData () {
      const riskLimitsData = { delta, vega }
      return riskLimitsData[this.labelType.toLowerCase()]
    }
  },

  methods: {
    // 切换标签类型
    labelChange (val) {
      this.labelType = val
    }
  }
}
</script>

<style lang="stylus">
.data-panel {
  background-color: #FFF;
  border-radius: 12px;
  padding: 20px 24px;
}
// 风险限额图表展示栏
.chart-model-box {
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap
  & > div {
    width: 30%
  }
}
.chart-model-box:after {
  content: '';
  width: 30%;
}
</style>
