<template>
  <div class="child-a">
    <p>ChildA:{{ countA }}</p>
    <button @click="handleClick(1)">ChildA-Add</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ChildA',
  data () {
    return {
      // 我们不再将数据放到组件里
      // count: 0
    }
  },

  computed: {
    ...mapState({
      countA: 'count'
    })
  },

  methods: {
    handleClick (num) {
      // 通过dispatch 触发actions 中的方法countAdd, actions提交mutations, num是携带的参数
      this.$store.commit('countAdd', num)
    }
  }
}
</script>
