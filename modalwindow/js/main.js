"use strict"

{
    const open = document.getElementById("open");
    const close = document.getElementById("close");
    const modal = document.getElementById("modal");
    const mask = document.getElementById("mask");

    open.addEventListener("click",()=> {
      modal.classList.remove("hiden");
      mask.classList.remove("hiden");
    
    });
    close.addEventListener("click",()=> {
      modal.classList.add("hiden");
      mask.classList.add("hiden");
    
    });
    mask.addEventListener("click",()=> {
      modal.classList.add("hiden");
      mask.classList.add("hiden");
    
    });
}