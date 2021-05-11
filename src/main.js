import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
import router from "./router.js";


Vue.config.productionTip = false;
Vue.component("LikeNumber",LikeNumber);
Vue.filter("upperCase",function(value){
  console.log("フィルタ");
  return value.toUpperCase();
});
Vue.mixin({
  //全てのインスタンスに適応してしまう。
  created(){
    console.log("global mixin");
  }
})
// Vue.directive("border",function(el,binding){
//   el.style.borderWidth = binding.value.width
//   el.style.borderColor = binding.value.color
//   el.style.borderStyle = binding.arg;
//   if(binding.modifiers.round && binding.modifiers.shadow){
//      el.style.borderRadius = "0.5rem"
//      el.style.boxShadow = "3px 3px 3px black";
//   }else if(binding.modifiers.shadow);{
//     el.style.boxShadow = "3px 3px 3px rgba(0,0,0,0.26)";
//   }
//   console.log(binding.value)

// });
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')