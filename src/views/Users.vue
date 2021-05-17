<template>
  <div>
    <h1>Users</h1>
    <button @click="number += 1">+1</button>
    <p>{{number}}</p>
    <hr>
     <h1 v-if="id">User No.{{ id }}</h1>
    <button @click="toHome">Homeに戻る</button>


    <router-link to="/users/1">User1</router-link>
    <router-link to="/users/2">User2</router-link>
    <hr>
    <router-link v-if="id" :to="'/users/'+ (Number(id) +1)+'/profile#next-user'">次のユーザー</router-link>
    <!-- <router-link v-if="id" :to='{name: "users-id-profile",params:{id: Number(id)+ 1 } ,query: {lang:"ja",page:2}}'>次のユーザー</router-link> -->
    <hr>
    <router-view></router-view>
    <div style="height:700px;"></div>
    <router-link id="next-user" v-if="id" :to='{name: "users-id-profile",params:{id: Number(id)+ 1} ,query: {lang:"ja",page:2}, hash: "#next-user"}'>次のユーザー</router-link>
  </div>
</template>
<script>


export default{
  props: ["id"],
  beforeRouteEnter(to,from,next){
    next(vm=>{
      console.log(vm.id);
    });
  },
  beforeRouteUpdate(to,from,next){
    console.log("Update")
    this.number = this.number + 1;
    next();
  },
  beforeRouteLeave(to,from,next){
    const isLeave = window.confirm("本当にこのページを離れますか？")
    if(isLeave){
     next();
    } else{
      next(false);
    }
    
  },
  data(){
    return{
      
      number:0
    }
  },
  methods:{
    toHome(){
      this.$router.push("/")
    }
  },
  // watch:{
  //   $route(to,from){
  //     console.log(to,from)
  //     console.log("$routeが変わった")
  //   }
  // }
}
</script>
