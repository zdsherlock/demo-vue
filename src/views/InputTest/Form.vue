<template>
	<form>
		<input-factory
			v-for="item in inputList"
			:type="item"
			:status="item"
			:key="item"
		></input-factory>
	</form>
</template>

<script>
import InputFactory from './InputFactory'

const formMap = {
	login: ['username', 'password', 'imgCode'],
	mobile: ['mobile', 'password'],
	email: ['email', 'password'],
}

export default {
	name: 'Form',
	// props: {
	// 	type: '',
	// },
	data() {
		return {
			type: 'login',
		}
	},
	components: {
		InputFactory,
	},
	computed: {
		inputList() {
			return formMap[this.type]
		},
	},
}
</script>
