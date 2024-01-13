import CauseButton from "./causeButton.js"

function NavButton(name, screen){
    if (name == "Our Causes"){
        return(
        `
        <div class="cause_div ${screen} navButton" id="our_causes">
            <p id="our_cause_text">${name}</p>
            ${CauseButton("Forests")}
            ${CauseButton("Seas")}
            ${CauseButton("Deserts")}
            ${CauseButton("Mountains")}
        </div>
        `
        )
    }
    else{
        return(
            `
            <button class="navButton ${screen}" id="${name}">${name}</button>
            `
            )
    }
}

export default NavButton