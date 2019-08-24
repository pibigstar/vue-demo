<template>
    <div class="contetn">
        <el-row>
            <el-button type="primary" @click="toAxios">axios使用</el-button>
            <el-button type="primary" @click="toFilter">filter使用</el-button>
            <el-button type="primary" @click="toI18n">i18n使用</el-button>
            <el-button type="primary" @click="toInput">自定义组件使用</el-button>
            <el-button type="primary" @click="toTable">表格使用</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    methods: {
        toAxios(){
            this.$router.push('axios')
        },
        toFilter(){
            this.$router.push('filter')
        },
        toTable(){
            this.$router.push('table')
        },
        toI18n(){
            this.$router.push('i18n')
        },
        toInput(){
            this.$router.push('input')
        },
    }
}
</script>

