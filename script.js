// alert("Hello World")
'use strict';

const switcher = document.querySelector(".btn")

switcher.addEventListener('click', function(){
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    const className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
        console.log("This is Light Theme")
    } else {
        this.textContent = "Light"
        console.log("This is Dark Theme")
    }
})