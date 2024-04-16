import "./style.css";

const navbarMobile = document.getElementById('navbar-toggle-btn')
const navbarMobileContent = document.getElementById('navbar-search')

navbarMobile.addEventListener("click",()=>{
    navbarMobileContent.classList.toggle('hidden')
})