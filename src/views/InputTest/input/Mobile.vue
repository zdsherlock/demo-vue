<template>
  <el-form-item label="手机号">
    <el-input :type="type" placeholder="请输入手机号"></el-input>
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
