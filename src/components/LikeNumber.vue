<template>
<div>
  <p class="hiroshi">いいね({{halfNumber}})</p>
  <button @click="increment">+1</button>
</div>
  
</template>

<script>

export default {
  props:{
    totalNumber: {
      type: Number,
      default:10
      // default:function(){
      //   return{
      //     number: 5
      //   }
      // }
    },
    testProps:{
      type: String
    }
  },
  methods:{
    increment: function(){

      this.$emit("my-click",this.totalNumber + 1);
    }
    
  },
  computed:{
    halfNumber(){
      return this.totalNumber / 2;
    }
  }

}
</script>

<style scoped>
div{
  border:1px solid blue;
}
</style>

