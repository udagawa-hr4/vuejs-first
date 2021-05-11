<template>
<div style="width:700px; margin:auto; padding-top:100px;">
  <nav>
    <router-link class="link"  style="cursor:pointer;" to="/" tag="p" active-class="link-">Home</router-link>
    <router-link class="link" style="cursor:pointer;" to="/users" tag="p">Users</router-link>
  </nav>
    <router-view>
      <div class="main">
        <button @click="myAnimation = 'fade'">fade</button>
        <button @click="myAnimation = 'slide'">slide</button>
        <p>{{myAnimation}}</p>
        <button @click="show = !show">切り替え</button>

        <br><br>
        <transition @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false"
        >
          <div class="circle" v-if="show"></div>
        </transition>  

        

        <br>
        <button @click="add">追加</button>
          <ul style="width:200px; margin:auto;">
            <transition-group name="fade" tag="div">
              <li v-for = '(number,index) in numbers' :key="number" @click="remove(index)" style="cursor:pointer;">{{ number }}</li>
            </transition-group>
            
          </ul>
        <br>

        <button @click="myComponent = 'ComponentA',active = !active" v-if="!active">A</button>
        <button @click="myComponent = 'ComponentB',active=!active" v-if="active">B</button>
        <transition name="slide" mode="out-in">
          <component :is="myComponent"></component>
        </transition>  
        <transition name="fade" 
          mode="out-in">
          <p v-if="show" key="hello">hello</p>
          <p v-if="!show" key="bye">こんにちは</p>
          </transition>




        <transition name="fade"  appear>
          <p v-if="show">hello</p>
        </transition> 
        <transition :name="myAnimation" appear>    
          <p v-if="show">bye</p>
        </transition>
        




      <LikeHeader>
        
        <h1>こんにちは</h1>
      
        <!-- <template #title>{{slotProps2}}</template> -->
      </LikeHeader>
      <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>   

      <button @click="currntComponent= 'Home'">Home</button>
      <button @click="currntComponent= 'About'">About</button>
      <keep-alive>
        <component v-bind:is="currntComponent"></component>
      </keep-alive>
      <div style="padding:10rem;">
        <h2>form</h2>
        <EventTitle v-model="eventData.title"></EventTitle>
        <!-- <EventTitle :value="eventData.title" @input="eventData.title = $event"></EventTitle> -->
        <label for="text">text</label>
        <input id = "text" type="text" v-model.lazy="eventData.text">
        <label for="number">number</label>
        <input id = "number" type="number" v-model.number="eventData.maxNumber">
      
      <pre>{{eventData.text}}</pre>
      <p>{{eventData.maxNumber}}</p>


    <hr>
      <label for="host">主催者</label>
        <input id="host" type="text" v-model.trim="eventData.host">
        <pre>{{eventData.host}}</pre>
        <label for="detail">detail</label>
        <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
        <p style="white-space:pre;">{{eventData.detail}}</p>
        

        <label for="isPrivate">非公開</label>
        <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
        <p>{{eventData.isPrivate}}</p>

        
        <p>年齢</p>
        <input type="checkbox" name="" id="10" value="10代" v-model="eventData.target">
        <label for="10">10代</label>
        <input type="checkbox" name="" id="20" value="20代" v-model="eventData.target">
        <label for="20">20代</label>
        <input type="checkbox" name="" id="30" value="30代" v-model="eventData.target">
        <label for="30">30代</label>
        <p>{{eventData.target}}</p>

        <p>参加費</p>
        <input type="radio" value="無料" id="free" v-model="eventData.price">
        <label for="free">無料</label>
        <input type="radio" value="有料" id="paid" v-model="eventData.price">
        <label for="paid">有料</label>
        <p>{{eventData.price}}</p>
        
        <p>開催場所</p>
        <select v-model="eventData.location">
          <option v-for="location in locations" :key="location">{{location}}</option>

        </select>
        <p>{{eventData.location}}</p>
      </div>
      </div>
    </router-view>
</div>



</template>
<script scoped>

import LikeHeader from './components/LikeHeader.vue'
import About from "./components/About.vue"
import Home from "./components/Home.vue"
import EventTitle from "./components/EventTitle.vue"
import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB";

export default {
  data(){
    return{
      numbers:[0,1,2],
      nextNumber:3,
      myAnimation: "slide",
      show:true,
      number:18,
      active:true,
      myComponent:"ComponentA",
      currntComponent:"",
      locations:["東京","大阪","名古屋"],
      eventData: {
        title:"",
        text:"",
        maxNumber:0,
        host:"",
        detail:"",
        isPrivate: false,
        target:[],
        price:"無料",
        location:"東京"
      }
    };
  },
 components:{
   LikeHeader,
   About,
   Home,
   EventTitle,
   ComponentA,
   ComponentB
  },
  methods:{
    incrementNumber(value){
      console.log(value)
      this.number = value
    },
    beforeEnter(el){
     el.style.transform = "scale(0)"
    },
    enter(el,done){
     let scale = 0;
     const interval = setInterval(()=>{
       el.style.transform = `scale(${scale})`
       scale += 0.1
       if (scale > 1){
         clearInterval(interval);
         done();
       }
     },50);
    },
    
    leave(el,done){
     let scale = 1;
     const interval = setInterval(()=>{
       el.style.transform = `scale(${scale})`
       scale -= 0.1
       if (scale < 0){
         clearInterval(interval);
         done();
       }
     },50);
    },
    
    randomIndex(){
      return Math.floor(Math.random() * this.numbers.length);
    },
    

    add(){
        this.numbers.splice(this.randomIndex(),0,this.nextNumber);
        this.nextNumber += 1;
    },
    remove(index) {
      this.numbers.splice(index,1);
    }
  }
}
</script>
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
</style>
