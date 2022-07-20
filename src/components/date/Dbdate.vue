<!--
 * @author: 双日历改样式
 * @Date: 2022-02-09 08:53:09
 * @LastEditTime: 2022-03-08 16:58:20
 * @FilePath: \资本合同管理\src\components\Dbdate.vue
-->
<template>
  <div class="db-date">
    <div class="left-date">
      <el-date-picker
        size="mini"
        v-model="value1"
        type="date"
        placeholder=""
        value-format="yyyy-MM-dd"
        :picker-options="startTimeOptions"
        @focus="clickStartTime"
        @change="timeChange"
        align="right"
      >
      </el-date-picker>
    </div>

    <span class="space">至</span>

    <div class="right-date">
      <el-date-picker
        prefix-icon="   "
        size="mini"
        v-model="value2"
        type="date"
        placeholder=""
        value-format="yyyy-MM-dd"
        :picker-options="endTimeOptions"
        @focus="clickEndTime"
        @change="timeChange"
        align="right"
      >
      </el-date-picker>
    </div>
  </div>
</template>
<script>
// 双日历改样式
export default {
  name: 'Dbdate',
  components: {},
  props: {
    startTime: String,
    endTime: String
  },
  data () {
    return {
      value1: this.startTime,
      value2: this.endTime,
      startTimeOptions: {},
      endTimeOptions: {}
    }
  },
  methods: {
    clickStartTime () {
      this.startTimeOptions.disabledDate = time => {
        if (this.value2) {
          if (time.getTime() > new Date(this.value2).getTime()) {
            return true
          }
        }
      }
    },
    clickEndTime () {
      this.endTimeOptions.disabledDate = time => {
        if (this.value1) {
          return time.getTime() < new Date(this.value1).getTime()
        }
      }
    },
    timeChange () {
      this.$emit('dbdateChange', this.value1, this.value2)
    }
  }
}
</script>

<style lang="scss">
.db-date {
  display: flex;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  width: 100%;
  max-width: 200px;

  .left-date,
  .right-date {
    flex-grow: 1;
    width: 0;

    & > .el-date-editor {
      width: 100%;
      input {
        width: 100%;
        border: none;
        padding-right: 15px;
      }
    }
  }
  .space {
    line-height: 28px;
    font-size: 12px;
    color: #303133;
  }
}
</style>
