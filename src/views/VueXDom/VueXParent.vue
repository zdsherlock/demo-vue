<template>
  <div class="vuex-parent">
    VueXParent
    <VueXChildA></VueXChildA>
    <VueXChildB></VueXChildB>
  </div>
</template>

<script>
import VueXChildA from './VueXChildA'
import VueXChildB from './VueXChildB'

export default {
  name: 'VueXParent',

  components: {
    VueXChildA,
    VueXChildB
  },

  data () {
    return {}
  }
}
</script>
