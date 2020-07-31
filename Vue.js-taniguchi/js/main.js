var app = new Vue({
 el: "#app",
 data: {
    prefs: [
       {name: "北海道"},
       {name: "青森県"},
       {name: "岩手県"},
       {name: "秋田県"},
       {name: "山形県"},
       {name: "岩手県"}
      ]
   },
   methods:{
      shuffle: function(){
         this.prefs = _.shuffle(this.prefs);
      }
   }

})