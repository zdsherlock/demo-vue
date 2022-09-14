<!--
 * @Author: zd
 * @Date: 2022-09-13 09:09:29
 * @LastEditors: zd
 * @LastEditTime: 2022-09-13 16:13:34
 * @Description: 自定义form的组件页面
-->

<script>
export default {
  name: 'formItem',

  props: {
    itemConfig: Object // 接收配置，外部传入
  },

  methods: {
    itemValueChange (val) {
      this.itemConfig.value = val
    }
  },

  render (createElement) {
    return createElement(
      'el-form-item',
      {
        props: { label: this.itemConfig.label }
      },
      [
        createElement(
          this.itemConfig.type,
          {
            props: {
              value: this.itemConfig.value
            },
            style: {
              width: this.itemConfig.width || '100%'
            },
            on: {
              change: this.itemValueChange
            }
          },
          this.itemConfig.selectOptions &&
            this.itemConfig.selectOptions.map(option =>
              createElement('el-option', {
                props: { label: option.label, value: option.value }
              })
            )
        )
      ]
    )
  }
}
</script>
