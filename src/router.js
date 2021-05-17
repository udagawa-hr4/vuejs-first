import Vue from "vue";
import Router from "vue-router"

// import Home from "./views/Home.vue"
// import Users from "./views/Users.vue"
// import UsersPosts from "./views/UsersPosts.vue"
// import HeaderHome from "./views/HeaderHome.vue"
// import HeaderUsers from "./views/HeaderUsers.vue"
// import UsersProfile from "./views/UsersProfile.vue"
const Home = () => import(/* webpackChunkName:"Home" */"./views/Home.vue");
const Users = () => import(/* webpackChunkName:"Users" */"./views/Users.vue");
const UsersPosts = () => import(/* webpackChunkName:"UsersPosts" */"./views/UsersPosts.vue");
const HeaderHome = () => import(/* webpackChunkName:"HeaderHome" */"./views/HeaderHome.vue");
const HeaderUsers = () => import(/* webpackChunkName:"HeaderUsers" */"./views/HeaderUsers.vue");
const UsersProfile = () => import(/* webpackChunkName:"UsersProfile" */"./views/UsersProfile.vue");

// import { resolve } from "core-js/fn/promise";
Vue.use(Router);


export default new Router({
  mode:"history",
  routes: [
  {
    path:'/',
    components:{
    default:Home,
    header:HeaderHome
    },
    beforeEnter(to,from,next){
      next();
    }
  },
  {
    path:'/users/:id',
    components:{
    default:Users,
    header:HeaderUsers
    },
    props: {
      default:true,
      header:false
    },
    children:[{
    path:"posts",component:UsersPosts,
    name:"users-id-posts"
    },
  {
    path:"profile",component:UsersProfile,
    name:"users-id-profile"
  },
  {
    path:"*",
    redirect:{
      path:"/"
    }
  }
]
},{path:'/users',component:Users}],
scrollBehavior(to, from, savedPosition) {
  return new Promise(resolve => {
      this.app.$root.$once('triggerScroll', () => {       // 第一引数:カスタムイベントを受け取るイベント名 ,第二引数:イベントの中の処理
          let position = {x:0, y:0}
          if(savedPosition) {
              position = savedPosition;
          }
          if(to.hash) {
              position = {
                  selector: to.hash
              }
          }
          resolve(position);
      })
  })

},
});