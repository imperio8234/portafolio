export const cardObserver = () =>{
const cards = document.querySelectorAll(".card-cont");

const observer = (entries) => {
entries.forEach( e => {
    if (e.isIntersecting) {
            e.target.classList.remove("transform");
    } else {
        e.target.classList.add("transform"); 
    }
})
}

const interObserver = new IntersectionObserver(observer, {
    threshold: 0.9
});

cards.forEach(item => {
    interObserver.observe(item)
})

}