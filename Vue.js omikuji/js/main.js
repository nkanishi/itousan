new Vue({
 el: "#app",
 data:{
   result:null,
   omikuji:["大","中","小"],
   button:"おみくじひく"
   
 },
 methods:{
   draw:function(){
     var index = Math.floor(Math.random() * omikuji.length);
     this.result = omikuji[index];
     this.button = "おみくじもう一回引く";
   }
 }
 
 
});