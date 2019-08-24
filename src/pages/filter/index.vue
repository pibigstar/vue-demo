<template>
    <div class="content">
        <div>Time： {{ time | dateFormat}}</div>
        <div>Status: {{ status | status}}</div>
    </div>
</template>

<script>

export default {
    data() {
        return{
            time: new Date(),
            status: 2,
        }
    }
}
</script>

<style lang="sass">
@import './index.scss'
</style>
