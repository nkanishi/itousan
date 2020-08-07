new Vue({
 el: "#app",
 data:{
   result:"ボタン押してね",
   omikujiResult:["大","中","小"], 
 },
 methods:{
   omikuji:function(){
     var num = Math.floor(Math.random() * this.omikujiResult.length);
     this.result = this.omikujiResult[num];
   }
 }
 
 
});