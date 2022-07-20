<template>
  <el-form size="mini" label-width="120px" label-position="left">
    <el-form-item label="金额">
      <el-input v-model="formData.money"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
// 表格组件测试
export default {
  name: 'computedForm',

  data () {
    return {
      formData: {}
    }
  }
}
</script>
