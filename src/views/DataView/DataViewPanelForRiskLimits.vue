<!--
 * @Author: zd
 * @Date: 2022-08-30 16:00:33
 * @LastEditors: zd
 * @LastEditTime: 2022-09-08 14:04:16
 * @Description: 限额图表
-->
<template>
  <div class="profit-loss-trend data-panel">
    <header style="display:flex;justify-content:space-between">
      <DataViewTitle>图例4</DataViewTitle>
      <DataViewRadio
        label1="type1"
        label2="type2"
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
      labelType: 'type1'
    }
  },

  computed: {
    // 根据类型切换给到和类型匹配的数据
    riskLimitsData () {
      const type1 = [
        { plate: '金库1', abs: 500, limit: 300 },
        { plate: '金库2', abs: 200, limit: 800 },
        { plate: '金库3', abs: 700, limit: 500 },
        { plate: '金库4', abs: 100, limit: 200 },
        { plate: '金库5', abs: 122, limit: 150 }
      ]
      const type2 = [
        { plate: '钱包1', abs: 3, limit: 30 },
        { plate: '钱包2', abs: 0, limit: 60 },
        { plate: '钱包3', abs: 1, limit: 50 },
        { plate: '钱包4', abs: 0, limit: 30 },
        { plate: '钱包5', abs: 31, limit: 20 }
      ]

      const riskLimitsData = { type1, type2 }
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
