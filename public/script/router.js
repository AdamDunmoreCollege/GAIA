import Home from "./comps/pages/home.js"
import About from "./comps/pages/about.js"
import Contact from "./comps/pages/contact.js"
import Generic from "./comps/pages/generic.js"

const content = document.getElementById("content")

const buttons = document.getElementsByClassName("navButton")
const causeButtons = document.getElementsByClassName("causeButton")
let causeIDs = []

for (let x = 0; x < causeButtons.length; x++){
    causeIDs[x] = causeButtons[x].id
}


content.innerHTML = Home()

const addListeners = () => {
    for (let x = 0; x < buttons.length; x++){
        buttons[x].addEventListener("click", () => {
            changeTab(buttons[x].id);
        })
    }
    for (let x = 0; x < causeButtons.length; x++){
        causeButtons[x].addEventListener("click", () => {
            changeTab(causeButtons[x].id)
        })
    }
}

const send_email = () => {
    let email = document.getElementById("email")
    let message = document.getElementById("message")
}

const changeTab = (ID) => {
    if (ID === "Home"){
        content.innerHTML = Home()
    }
    else if(ID === "About"){
        content.innerHTML = About()
    }
    else if(ID === "Contact"){
        content.innerHTML = Contact()
        document.getElementById("send_email").addEventListener("click", send_email)    
    }
    else if (causeIDs.includes(ID)){
        content.innerHTML = Generic(ID)
    }
}

addListeners()