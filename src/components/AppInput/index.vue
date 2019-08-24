<template>
    <el-input
      :placeholder="placeholder"
      v-model="inputVal"
    >
    </el-input>
</template>

<script>
export default {
  props: {
    inputVal: {
      type: String,
      default: 'dd',
    },
    placeholder: {
      type: String,
      default: 'ff',
    }
  },

  watch:{
  inputVal:function(newVal,oldVal){
    this.inputVal = newVal;
  }
},
  mounted(){
    console.log("=========================")
    console.log(this.inputVal)
  },

  data() {
    return {
      inputVal: "pibigstar",
      placeholder: "请输入内容ssss",
    }
  },

  methods: {
    changeValue(){
      console.log("*************")
      this.$emit(changeMethod,inputVal)
    }
  },


}