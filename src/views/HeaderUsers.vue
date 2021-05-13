<template>
  <nav>
    <h2>Users</h2>
    <router-link class="link"  style="cursor:pointer;" to="/" tag="p" active-class="link-active" exact>Home</router-link>
    <router-link class="link" style="cursor:pointer;" to="/users" tag="p" active-class="link-active" exact>Users</router-link>
  </nav>
</template>
<style scoped>
.fade-enter{
  /*現れる時の最初*/
  opacity: 0;
}
.fade-enter-active{
  /*現れる時のtransition*/
  transition: opacity 1s;
}
.fade-enter-to{
  /*現れる時の最後*/
  opacity: 1;
}
.fade-leave{
  /*消える時の最初*/
  opacity: 1;

}
.fade-leave-active{
  /*消える時のtransition*/
  transition: opacity 1s;
  position: absolute;
  width: 200px;
}
.fade-leave-to{
  /*消える時の最後*/
  opacity: 0;

}
.fade-move{
  transition:transform 1s;
}


.slide-enter-active{
  animation: slide-in 1s;
  transition: opacity 1s;
}

.slide-leave-active{
  animation: slide-in 1s reverse;
  transition: opacity 1s;
}


@keyframes slide-in {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to{
    transform: translateX(0);
    opacity: 1;
  }
}
div{
  color: rgb(255, 30, 0);
}
.main{
  margin: auto;
  width: 70%;
  padding-top: 5rem;
  text-align: center;
}
.circle{
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: auto;
  background-color: deeppink;
}
.link{
  display: inline;
  margin-right: 10px;
}
.link-active{
  font-size: 30px;
}
</style>
