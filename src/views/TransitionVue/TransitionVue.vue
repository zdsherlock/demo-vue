<template>
  <div class="transition-demo">
    <button @click="show = !show">
      Toggle
    </button>

    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
// vue内置组件transition的测试
export default {
  name: 'TransitionVue',

  data () {
    return {
      show: true
    }
  }
}
</script>

<style lang="scss">
.transition-demo {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
