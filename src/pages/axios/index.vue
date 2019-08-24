<template>
    <div class="content">
        <div class="phon">
            <el-input
                placeholder="请输入手机号"
                v-model="phone"
                clearable>
            </el-input>
        </div>
        <div class="btn">
            <el-button @click="send"  type="primary">发送</el-button>
        </div>

    </div>
</template>



<script>
export default {
    data(){
        return{
            phone: '',
        }
    },
    methods:{
        send() {
            this.$axios({
                method: 'get',
                url: `/api/uc/verificationCode/get?phoneNo=${this.phone}&countryCode=86`,
            }).then(res=>{
                console.log(res)
            })
        },

        manySend() {
            //多个请求，对返回值统一处理
            this.$axios.all([
                this.$axios.get("/user.json"),
                this.$axios.get("/data.json"),
            ]).then(
                this.$axios.spread((userRes,dataRes)=>{
                    console.log(userRes)
                    console.log(dataRes)
                })
            )
        },
        
        sendWithTimeout() {
            let axios = this.$axios.create({
                baseURL: "https://uc.woloapp.cn:8000/",
                timeout: 2000,
                header: {'Access-Control-Allow-Origin': '*'},

            })
            axios.get(`api/uc/verificationCode/get?phoneNo=${this.phone}&countryCode=86`,{
                    dataType: 'jsonp',
                    crossDomain: true,
            }).then(res=>{
                console.log(res)
            })
        }

    },

    created() {
        this.manySend()
    }
       
}
</script>

<style lang="scss">
@import './index.scss';
</style>


