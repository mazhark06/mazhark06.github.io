const first_line= document.querySelector(".down-rotate-up");
const third_line= document.querySelector(".up-rotate-down");
const second_line= document.querySelector(".none");
const panel= document.querySelector(".panel");
const box = document.querySelectorAll(".data")

function paneldown(){
    first_line.classList.toggle("toggle");
    third_line.classList.toggle("toggle");
    second_line.classList.toggle("toggle");
    panel.classList.toggle("active");
}

const hamburger = document.querySelector(".hamburger-line");
hamburger.addEventListener('click' , paneldown);

const Observer = new IntersectionObserver((entries)=>{
 
    entries.forEach((entry) => {
           if(entry.isIntersecting){
             entry.target.classList.add("active")
            //    Observer.unobserve(entry.target)
           }
           
    })
},{threshold: 0.5})

box.forEach(entry => Observer.observe(entry))


