<template>
    <el-input
      :placeholder="placeholder"
      v-model="value"
      @input="changeValue"
    >
    </el-input>
</template>

<script>
export default {
  props: {
    inputVal: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },

  watch:{
      inputVal:function(newVal){
        this.value = newVal;
      }
  },

  data(){
      return{
          value: '',
      }
  },
  mounted(){
    console.log("==========页面加载完成=========")
    this.value = this.inputVal
  },

  methods: {
      changeValue: function () {
          this.$emit('changeValue', this.value)
      }
  },
}

</script>