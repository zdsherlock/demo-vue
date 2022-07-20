<template>
  <div>
    <el-button type="success" @click="handleClick('success')">成功</el-button>
    <el-button type="warning" @click="handleClick('warning')">警告</el-button>
    <el-button type="danger" @click="handleClick('error')">错误</el-button>
    <el-button type="info" @click="handleClick('info')">信息</el-button>
  </div>
</template>

<script>
// message组件测试
export default {
  name: 'Message',

  methods: {
    // message的点式写法
    handleClick (type) {
      this.$message[type](type)
    }
  }
}
</script>
