<template>
  <component :is="comStatus"></component>
</template>

<script>
import TableExportByDom from './Table/TableExportByDom.vue'
import Message from './Message/Message.vue'
import ComputedTest from './Computed/ComputedTest'
import TableInfiniteScroll from './Table/TableInfiniteScroll'
import TableScroll from './Table/TableScroll'
import DemoRender from './Demo/DemoRender'
import FormItemPropDemo from './elementDemo/FormItemPropDemo'

const COM_MAP = {
  TableExportByDom,
  Message,
  ComputedTest,
  TableInfiniteScroll,
  TableScroll,
  DemoRender,
  FormItemPropDemo
}

// 首页
export default {
  name: 'Home',

  components: COM_MAP,

  data () {
    return {
      name: 'FormItemPropDemo'
    }
  },

  computed: {
    comStatus () {
      return COM_MAP[this.name]
    }
  },

  methods: {}
}
</script>
