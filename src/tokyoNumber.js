export const tokyoNumber = {
  data() {
    return{
      tmpData:"hello",
      title:"Welcom to Tokyo",
      subTitle:"Tokyo is a great city",
      number:0
    }
   },
   filters: {
    lowerCase(value){
      return value.toLowerCase();
    }
   },
   created(){
     console.log("created in mixin")
   }
}