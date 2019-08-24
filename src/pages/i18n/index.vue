<template>
    <div class="content">
        <div> {{ label + ":" + phone}}</div>
        <br>
       <el-button type="primary" @click="getI18n">i18n使用</el-button>
       <el-button type="primary" @click="changeLang">更改语言</el-button>
    </div>
</template>

<script>
import engine from '../../engine/engine'

export default {
    data() {
        return {
            currentLang: "en",
            label: engine.i18n("phone"),
            phone: "15936010174"
        }
    },
    methods: {
        getI18n(key) {
            this.$message(engine.i18n("phone"));
        },

        changeLang() {
            if(this.currentLang === "en"){
                engine.setLanguage("zh")
                this.currentLang = "zh"
                this.label =  engine.i18n("phone")
            } else {
                engine.setLanguage("en")
                this.currentLang = "en"
                this.label =  engine.i18n("phone")
            }
           
        }
    }
    
}
</script>
