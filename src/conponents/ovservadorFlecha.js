export const Observador = () => {

// transiciones de las ventajas

const flecha = document.getElementById("flecha");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");


const ovservador = (entries) => {
    entries.forEach(e => {
        if(e.isIntersecting){
            flecha.classList.remove("noVisible", "flecha");
            console.log("no mostrar")
        } else {
            flecha.classList.add("flecha");
        }
        
    });
};

const observer = new IntersectionObserver(ovservador, {
    threshold: 0.1
});

observer.observe(header)

// scroll to start

flecha.addEventListener("click", () => {
    nav.scrollIntoView({behavior: "smooth"})
})

}

