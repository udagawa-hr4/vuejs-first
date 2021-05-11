<template>
<div>

 <slot></slot>
</div>

  
</template>
<script>


export default {
  data(){
    return{
      user:{
        firstName:"Hiroshi",
        lastName:"Udagawa"
      }
    }
  },
  props: ["headerText"]
}
</script>

