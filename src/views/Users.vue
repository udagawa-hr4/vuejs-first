<template>
  <div>
    <h1>Users</h1>
    <button @click="number += 1">+1</button>
    <p>{{number}}</p>
  </div>
</template>
<script>


export default{
  data(){
    return{
      number:0
    }
  }
}
</script>
