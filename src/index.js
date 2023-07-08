import { Observador } from "./conponents/ovservadorFlecha.js";
import { cardObserver } from "./conponents/observerCard.js";
import { form } from "./conponents/formularioAcciones.js"


// esconder menu
const esconder= document.querySelector(".bars");
const nav = document.querySelector(".nav");

esconder.addEventListener("click", () => {
   nav.classList.toggle("displaynone")
})

// abrir formulario

const abrir = () => {
    const formulario = document.querySelector(".formulario-cont");

    if (formulario.classList.contains("close")) {
        formulario.classList.remove("close")
    } else {
        formulario.classList.add("close")
    }

}


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

// llamados de componentes
Observador();
cardObserver();
form();


//transicion de titulo

function intercambio() {
    const titulo2 = document.getElementById("titulo2")
    const titulo1 = document.getElementById("titulo1")
    if (titulo1.classList.contains("titulo11")) {
        titulo1.classList.remove("titulo11");
        titulo1.classList.add("titulo1");
        // titulo 2
        titulo2.classList.remove("titulo22");
        titulo2.classList.add("titulo2");
    }else {
        titulo1.classList.add("titulo11");
        titulo1.classList.remove("titulo1");
        // titulo 2
        titulo2.classList.add("titulo22");
        titulo2.classList.remove("titulo2");

    }

    
    
}

setInterval(() => {
    intercambio()
}, 4000);






  
  