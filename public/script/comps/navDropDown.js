import NavButton from "./navButton.js"

export function NavDropDown(){
    return(
        `
        <div id="DD">
            ${NavButton("Home", "mobile")}
            ${NavButton("About", "mobile")}
            ${NavButton("Contact", "mobile")}
            ${NavButton("Forests", "mobile")}
            ${NavButton("Seas", "mobile")}
            ${NavButton("Deserts", "mobile")}
            ${NavButton("Mountains", "mobile")}
        </div>
        `
    )
}

export function NavDropDownButton(){
    return(
        `
        <button id="DDButton"></button>
        `
    )
}