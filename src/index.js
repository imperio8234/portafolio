import { Observador } from "./conponents/ovservadorFlecha.js";
import { cardObserver } from "./conponents/observerCard.js";


// esconder menu
const esconder= document.querySelector(".bars");
const nav = document.querySelector(".nav");

esconder.addEventListener("click", () => {
   nav.classList.toggle("displaynone")
})


//redireccion scroll

const secciones = document.querySelectorAll(".secciones");

secciones.forEach(e => {
    e.addEventListener("click", () => {
        const elementoScroll = document.getElementById(e.textContent);
    if(elementoScroll){
        elementoScroll.scrollIntoView({behavior: "smooth"})
    }
    })
});

Observador();
cardObserver();






  
  