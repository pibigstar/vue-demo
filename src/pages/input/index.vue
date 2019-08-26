<template>
    <div class="content">
        <div>子组件中的</div>
        <br>
        <app-input
           placeholder="请输出子组件内容"
           inputVal="父组件的值"
           @changeValue="changeInfo"
        ></app-input>
    <br>
    <div>父组件中的</div>
    <br>
    <el-input
      :placeholder="placeholder"
      v-model="inputVal"
    >
    </el-input>
   </div>
</template>

<script>
import AppInput from '@/components/AppInput'
export default {
    components: {
        AppInput
    },
    data() {
        return {
            inputVal: "pibigstar",
            placeholder: "请输入内容",
        }
    },

    methods: {
        changeInfo(value) {
            this.$message(value)
        },
    },
}
</script>
