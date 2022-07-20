<template>
  <div class="child-b">
    <p>ChildB:{{ count }}</p>
    <button>ChildB-Add</button>
  </div>
</template>

<script>
export default {
  name: 'ChildB',

  data () {
    return {
      //
      // count: 0
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>
