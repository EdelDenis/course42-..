"use strict"

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector(".heart");
const wrapper = document.querySelector(".wrapper");

//box.style.backgroundColor = "blue";
//box.style.width = "500px";

box.style.cssText = "background-color: blue; width:500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

//for (let i=0; i < hearts.length; i++) {
  //  hearts[i].style.backgroundColor = "blue";
//}

hearts.forEach(item =>{
    item.style.backgroundColor = "blue";
}); /* переборка псевдомассива */

const div = document.createElement("div"); // - создали переменную с дивом 
//const text = document.createTextNode("Тут был я");

div.classList.add("black"); // - добавили к диву класс из цсс селекторов

// wrapper.append(div); // - добавить К враперу див в КОНЕЦ

// wrapper.prepend(div); // - добавить К враперу див в НАЧАЛО 

// hearts[0].before(div) // - добавить див ПЕРЕД выбраным элементом (хартс 0);

// hearts[0].after(div) // - добавить див ПОСЛЕ выбранного элемента (хартс 0);







