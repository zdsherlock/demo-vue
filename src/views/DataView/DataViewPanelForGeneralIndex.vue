<template>
  <div class="general-index data-view-panel">
    <header style="display:flex;justify-content:space-between">
      <DataViewTitle>测试3</DataViewTitle>
      <i
        class="el-icon-full-screen"
        style="cursor:pointer"
        @click.stop="toggleFullScreen"
      ></i>
    </header>
    <main style="margin-top:20px;display:flex;justify-content:space-between">
      <DataViewIndexBox
        v-for="(item, i) in generalIndexData"
        :indexTitle="item.indexTitle"
        :indexLabel="item.indexLabel"
        :indexValue="item.indexValue"
        :indexPCT="item.indexPCT"
        :isShowIcon="item.isShowIcon"
        :key="i"
      ></DataViewIndexBox>
    </main>
  </div>
</template>

<script>
//
import DataViewIndexBox from './components/DataViewIndexBox'
import DataViewTitle from './components/DataViewTitle.vue'
export default {
  name: 'DataViewPanelForGeneralIndex',

  components: { DataViewIndexBox, DataViewTitle },

  data () {
    return {
      // 综合指标数据
      generalIndexData: []
    }
  },

  methods: {
    // 点击触发父级全屏效果
    toggleFullScreen () {
      this.$emit('toggleFullScreen')
    }
  }
}
</script>
