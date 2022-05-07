"use strict"

const box = document.getElementById("box"); // - найти єлемент по ид 
const btns = document.getElementsByTagName("button"); // - найти єлемент по хтмл тегу
const circles = document.getElementsByClassName("circle"); // - найти єлемент по классу (без точки)
const hearts = document.querySelectorAll(".heart"); // - найти єлемент по селектору (нужна точка или ид) - можно еще с индексами из псевдомассива
const oneHeart = document.querySelector(".heart"); // - найти єлемент по селектору (всегда віводится первій)
const wrapper = document.querySelector(".wrapper");

//const oneHeart = wrapper.querySelector(".heart")

//box.style.backgroundColor = "blue"; - добавить к выбранному элементу стайл 
//box.style.width = "500px";

box.style.cssText = "background-color: blue; width:500px"; // - напрямую забивать в инлайн стили

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

//for (let i=0; i < hearts.length; i++) {
  //  hearts[i].style.backgroundColor = "blue";
//}

hearts.forEach(item =>{
    item.style.backgroundColor = "blue";
}); /* переборка псевдомассива - ДОБАВЛЯЕТ К КАЖДОМУ ЭЛЕМЕНТУ ПСЕВДОМАССИВА НАПИСАННЫЙ ВНУТРИ ФУНКЦИИ ЦСС КОД */

const div = document.createElement("div"); // - создали переменную с каким то дивом 
//const text = document.createTextNode("Тут был я");

div.classList.add("black"); // - добавили к диву класс из цсс селекторов

wrapper.append(div); // - добавить К враперу(класс с сердечками) див в КОНЕЦ (посл во врапере)

// wrapper.prepend(div); // - добавить К враперу див в НАЧАЛО (первый во врапере)

// hearts[0].before(div) // - добавить див ПЕРЕД выбраным элементом (хартс 0);

// hearts[0].after(div) // - добавить див ПОСЛЕ выбранного элемента (хартс 0);

// circles[0].remove(); // - удалить єлемент с индексом со страниці

// hearts[0].replaceWith(circles[0]); // - заменить элемент другим элементом (с индексами)

// ----------------- устаревшие конструкции ------------------------

//wrapper.appendChild(div) // - добавили див последним во враппер

// wrapper.insertBefore(div, hearts[0]) // - вставить перед (див перед хартс 0)

// wrapper.removeChild(hearts[1]); // - удалить элемент ( обращаемся к родителю - и потом какой именно элемент + его индекс (псевдомассив))

 //wrapper.replaceChild(circles[0], hearts[0]) // - заменить элемент другим элементом


// ----------------------------- работа с элементами ------------------------

div.innerHTML = "<h1>Hello world</h1>"; // - добавить наш див єлемент на сайт уже с текстом(пример)

// div.textContent = "Hello"; // - добавить текст в выбранный див (пример);

// div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>"); // beforebegin - вставить хтмл код ПЕРЕД дивом
                                                           // afterbegin - вставить хтмл код в начало дива 
                                                          // beforeend - вставить хтмл код перед концом
                                                         // afterend - вставить хтмл код после конца дива



