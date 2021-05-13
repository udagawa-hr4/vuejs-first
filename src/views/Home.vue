<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">Usersのページへ</button>
  </div>
</template>
<script>

export default {
  methods:{
    toUsers(){
      this.$router.push("users")
      // this.$router.push({
      //   name:"users-id-profile",
      //   params:{id:1}
      // })
    }
  }
}
</script>