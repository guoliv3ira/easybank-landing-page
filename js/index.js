const btn_mobile = document.querySelector(".menu-btn")
const head = document.querySelector(".menu")
const icon = document.querySelector(".fas")


btn_mobile.addEventListener("click", (event)=>{
    event.preventDefault();
    
    if (head.classList.contains("menu-hidden")){
    head.classList.remove("menu-hidden")
    icon.setAttribute("class", "fas fa-times")
}
    else{
        head.classList.add("menu-hidden")
        icon.setAttribute("class", "fas fa-bars")
    }
})

if (window.SimpleAnime){
    new SimpleAnime()
    }