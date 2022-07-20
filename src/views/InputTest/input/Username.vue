<template>
  <el-form-item label="用户名">
    <el-input :type="type" placeholder="请输入用户名"></el-input>
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
