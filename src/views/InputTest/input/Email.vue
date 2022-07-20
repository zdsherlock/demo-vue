<template>
  <el-form-item label="邮箱">
    <el-input :type="type" placeholder="请输入邮箱"></el-input>
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
