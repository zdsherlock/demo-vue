<script>
export default {
  render (createElement) {
    return createElement('div', {
      // 与`v-bind:style`的API相同
      // 接受一个字符串、对象，或对象组成的数组
      style: {
        color: 'red',
        fontSize: '14px'
      },
      // DOM property
      domProps: {
        innerHTML: 'this is a test'
      }
    })
  }
}
</script>
