<template>
  <div>
    <form action="">
      <input v-model="formData.money" type="text" value="money" />
    </form>

    <el-button @click="showData">showData</el-button>
  </div>
</template>

<script>
import ComputedForm from './components/computedForm.vue'

// 测试计算属性的监听
export default {
  name: 'Computed',

  components: { ComputedForm },

  data () {
    return {
      formData: {}
    }
  },

  computed: {
    formatData () {
      const obj = this.formData.money

      return obj + 'a'
    }
  },

  methods: {
    showData () {
      console.log(this.formatData)
    }
  }
}
</script>
