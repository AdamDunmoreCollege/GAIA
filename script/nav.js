import NavButton from "./comps/navButton.js"
import { NavDropDown, NavDropDownButton } from "./comps/navDropDown.js"

const nav = document.getElementById("nav")

nav.innerHTML = `
    <img id="navLogo" src="./assets/img/Logo_Transparent.png" alt="logo">
    ${NavButton("Home", "pc")}
    ${NavButton("About", "pc")}
    ${NavButton("Contact", "pc")}
    ${NavButton("Our Causes", "pc")}
    ${NavDropDownButton()}
    ${NavDropDown()}

`

const navDDButton = document.getElementById("DDButton")
const navDD = document.getElementById("DD")
let img = true

navDDButton.addEventListener("click" , () =>{
    if (img == true){
        navDDButton.style.backgroundImage = "url('../assets/img/close.svg')"
        navDD.style.width = "200px"
    }
    else {
        navDDButton.style.backgroundImage = "url('../assets/img/menu.svg')"
        navDD.style.width = "0px"

    }
    img = !img
})