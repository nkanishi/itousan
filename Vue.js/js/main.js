(function(){
"use strict";

//two way binding(to UI)
var vm = new Vue({
 el: "#app",
 data:{
     newItem: "",
     todos:[
         "task 1",
         "task 2",
         "task 3"
     ]
 }
});

})();