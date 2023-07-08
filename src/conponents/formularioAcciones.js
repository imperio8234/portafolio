export const form = () => {
    const formulario = document.querySelector(".formulario-cont");
    const cerrar = document.querySelector(".close-button");
    const btnAbrir= document.querySelectorAll(".btn-abrir") 
    cerrar.addEventListener("click", () => {
            formulario.classList.add("close");
    })

    btnAbrir.forEach(btn => {
        btn.addEventListener("click", () => {
            formulario.classList.remove("close");
        })
    })



}

