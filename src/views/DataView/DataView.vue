<template>
  <div
    ref="dataViewRef"
    class="data-view"
    style="min-width:1550px;overflow:auto"
  >
    <DataViewPanelForGeneralIndex
      @toggleFullScreen="toggleFullScreen"
    ></DataViewPanelForGeneralIndex>
    <div style="display:flex">
      <DataViewPanelForProfitAndLossTrend
        style="flex-grow:1;margin-right:16px;width:0"
        :key="panelKey"
      ></DataViewPanelForProfitAndLossTrend>
      <DataViewPanelForProfitAndLoss
        :style="{ width: asidePanelWidth }"
        :key="panelKey + 1"
      ></DataViewPanelForProfitAndLoss>
    </div>
    <div style="display:flex">
      <DataViewPanelForRiskLimits
        style="flex-grow:1;margin-right:16px;width:0"
      ></DataViewPanelForRiskLimits>
      <DataViewPanelForWarningMsg
        :style="{ width: asidePanelWidth }"
        :key="panelKey"
      ></DataViewPanelForWarningMsg>
    </div>
    <div style="display:flex">
      <DataViewPanelForCashDeposit
        ref="cashDepositRef"
        style="margin-right:16px;flex-grow:1;width:0"
      ></DataViewPanelForCashDeposit>
      <DataViewPanelForExtendCredit
        style="margin-right:16px;flex-grow:1;width:0"
      ></DataViewPanelForExtendCredit>
      <DataViewPanelForConcentrationShare
        style="flex-grow:1;width:0"
      ></DataViewPanelForConcentrationShare>
    </div>
  </div>
</template>

<script>
import DataViewPanelForProfitAndLossTrend from './DataViewPanelForProfitAndLossTrend'
import DataViewPanelForConcentrationShare from './DataViewPanelForConcentrationShare'
import DataViewPanelForProfitAndLoss from './DataViewPanelForProfitAndLoss'
import DataViewPanelForGeneralIndex from './DataViewPanelForGeneralIndex'
import DataViewPanelForRiskLimits from './DataViewPanelForRiskLimits'
import DataViewPanelForCashDeposit from './DataViewPanelForCashDeposit'
import DataViewPanelForWarningMsg from './DataViewPanelForWarningMsg'
import DataViewPanelForExtendCredit from './DataViewPanelForExtendCredit'

// 数据看板样式
export default {
  name: 'DataView',

  data () {
    return {
      // echarts配置文件
      chartOptions: null,
      // 侧边栏宽度
      asidePanelWidth: 0,
      // 强制刷新面板，用于更新宽度
      panelKey: 0,
      // 添加页面大小变化监听
      resizeListener: null,
      // 监听是否是全屏状态
      isFullScreen: false
    }
  },

  components: {
    DataViewPanelForProfitAndLossTrend,
    DataViewPanelForConcentrationShare,
    DataViewPanelForProfitAndLoss,
    DataViewPanelForGeneralIndex,
    DataViewPanelForRiskLimits,
    DataViewPanelForCashDeposit,
    DataViewPanelForWarningMsg,
    DataViewPanelForExtendCredit
  },

  methods: {
    // 初始化页面
    initPage () {
      this.getBottomPanelWidth()
      this.resizeListener = () => this.getBottomPanelWidth()
      window.addEventListener('resize', this.resizeListener)
    },
    // 获取底部面板宽度
    getBottomPanelWidth () {
      this.$nextTick(() => {
        this.asidePanelWidth = `${this.$refs.cashDepositRef.$refs.profitLossRef.offsetWidth}px`
        this.panelKey++
      })
    },
    //开启全屏
    launchFullScreen () {
      const element = this.$refs.dataViewRef
      this.isFullScreen = true
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    },

    // 退出 fullscreen
    exitFullscreen () {
      if (!this.isFullScreen) return
      this.isFullScreen = false
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozExitFullScreen) {
        document.mozExitFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
    },
    // 切换是否全屏
    toggleFullScreen () {
      if (!this.isFullScreen) {
        this.launchFullScreen()
      } else {
        this.exitFullscreen()
      }
    }
  },

  mounted () {
    this.initPage()
  }
}
</script>

<style lang="stylus">
.data-view {
  background-color: #f7f7fa;
  // height: 100%;
  // temp
  padding: 20px;

  //
  & .data-view-panel {
    background-color: #FFF
    border-radius: 12px;
    padding: 20px 24px;
    box-sizing: border-box;
    position: relative;
  }
  & > div {
    margin-top: 16px;
  }
  &> div:first-child {
    margin-top: 0
  }
}
</style>
