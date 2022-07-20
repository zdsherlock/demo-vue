// 测到的form-item中的prop属性不能传入带有点位符号的String，用于测试
<template>
    <el-form :model="formData">
        <el-form-item :prop="testprop">
            <el-input v-model="formData[testprop]"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: 'FormItemPropDemo',

    data() {
        return {
            formData: {},
            // 这个的问题处在ele的getPropByPath函数，如果带有.这个函数会主动处理并识别为路径
            testprop: 'a.b'
        };
    },
};
</script>
