<template>
	<el-form>
		<UserName :formData="formData"></UserName>
	</el-form>
</template>

<script>
//
import UserName from './input/UserName.vue'
export default {
	name: 'ObjAddTest',
	components: {
		UserName,
	},
	data() {
		return {
			formData: {},
		}
	},
}
</script>
