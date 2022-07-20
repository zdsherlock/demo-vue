<template>
	<a :href="url" class="">
		<slot>
			{{ user.lastName }}
		</slot>
	</a>
</template>

<script>
// 不具名slot测试
export default {
	name: 'MyLink',
	data() {
		return {
			url: '',
			user: {
				firstName: 'li',
				lastName: 'lang',
			},
		}
	},
}
</script>
