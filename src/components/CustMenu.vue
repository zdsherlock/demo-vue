<template>
  <div class="cust-menu" @click.stop="">
    <el-checkbox-group v-model="selectedList" @change="handleListChange">
      <el-checkbox
        v-for="(item, i) in menuList"
        :label="item.label"
        :key="i"
      ></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'CustMenu',

  props: {
    curHeaders: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      // 被选中的列表
      selectedList: this.curHeaders.map(item => item.label),

      // 缓存全部列表
      menuList: structuredClone(this.curHeaders)
    }
  },

  computed: {},

  methods: {
    // 被选中列表change事件
    handleListChange (list) {
      const curHeaders = this.menuList.filter(item => list.includes(item.label))
      this.$emit('update:curHeaders', curHeaders)
    }
  }
}
</script>

<style lang="stylus">
.cust-menu {
  position: absolute;
  background-color: #fff;
  width: 100px;
  /*height: 106px;*/
  font-size: 12px;
  color: #444040;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  white-space: nowrap;
  z-index: 1000;

  /* 修改checkbox初始样式 */
  .el-checkbox-group {
    display: flex;
    flex-direction: column;
  }
}
.contextmenu__item:hover {
  cursor: pointer;
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
</style>
