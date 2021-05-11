<template>
  
  <div>
    <p>about</p>
   <input>
  </div>
  
</template>
<script>


export default{
  created(){
    console.log("create")
  },
  destroyed(){
    console.log("destroyed");
  },
  deactivated(){
    console.log("deactivated")
  },
  activated(){
    console.log("activated")
  }
}
</script>
