import Home from "./comps/pages/home.js"
import About from "./comps/pages/about.js"
import Contact from "./comps/pages/contact.js"
import Generic from "./comps/pages/generic.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMgvMISFn9DeBwkJzsFZZ2MTvEup83jU8",
  authDomain: "gaia-769d8.firebaseapp.com",
  projectId: "gaia-769d8",
  storageBucket: "gaia-769d8.appspot.com",
  messagingSenderId: "196816720301",
  appId: "1:196816720301:web:7186d3cd7e2ee9e1bd5124",
  measurementId: "G-S5BWBRQ1NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function send_email(){
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    try {
        const docRef = await addDoc(collection(db, "contact"), {
            email: email,
            message: message
        })

        alert("Your email has been submitted and will be reviewed by our support team")
    } catch (e){
        alert("Your email failed to send. Try again later")
    }
    
}

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