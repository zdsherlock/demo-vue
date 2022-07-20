<template>
  <el-form-item label="验证码">
    <el-input :type="type" placeholder="请输入验证码"></el-input>
  </el-form-item>
</template>
<script>
export default {
  props: {
    type: '',
    status: ''
  }
}
</script>
