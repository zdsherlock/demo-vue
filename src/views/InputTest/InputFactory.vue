<template>
	<!-- 动态组件 -->
	<component :is="comInput" :type="type" :status="status"></component>
</template>

<script>
import Username from './input/Username'
import Mobile from './input/Mobile'
import Email from './input/Email'
import Password from './input/Password'
import ImgCode from './input/ImgCode'

const inputMap = {
	Username,
	Mobile,
	Email,
	Password,
	ImgCode,
}

export default {
	props: {
		name: '',
		type: '',
		status: '',
	},

	components: inputMap,

	computed: {
		comInput() {
			return inputMap[this.name]
		},
	},
}
</script>
