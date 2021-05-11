<template>
<div>
  <p v-border:solid.shadow="{width:'5px',color:'red'}">home</p>
  <h2>{{title | lowerCase | upperCase}}</h2>
  <p>{{subTitle | lowerCase}}</p>
  <p>{{number}}</p>
  <button @click="number++">+1</button>
  <CountNumber></CountNumber>
</div>
  
</template>
<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";
export default {
  mixins:[tokyoNumber],
  data(){
   return{
     tmpData:"hello",
   }
  },
  components:{
    CountNumber
  },
  // computed:{
  //   upperCaseTitle(){
  //     return this.title.toUpperCase();
  //   }
  // },
  
  directives: {
    border(el,binding){
      el.style.borderWidth = binding.value.width
      el.style.borderColor = binding.value.color
      el.style.borderStyle = binding.arg;
      if(binding.modifiers.round && binding.modifiers.shadow){
        el.style.borderRadius = "0.5rem"
        el.style.boxShadow = "3px 3px 3px black";
      }else if(binding.modifiers.shadow);{
        el.style.boxShadow = "3px 3px 3px rgba(0,0,0,0.26)";
      }
      // console.log(binding.value)

    }
  }
}
</script>
