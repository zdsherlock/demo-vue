<template>
	<div class="slot-test">
		<MyLink>
      
    </MyLink>
	</div>
</template>

<script>
// 引入组件
import MyLink from './component/MyLink.vue'

// 插槽测试-父组件
export default {
	name: 'slotTest',
	component: { MyLink },

	data() {
		return {
			user: {
				firstName: 'li',
				lastName: 'lang',
			},
		}
	},
}
</script>
