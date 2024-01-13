let imgDiv;

function CarouselImage(slide){
    if (slide === 1){
        imgDiv.innerHTML = '<img id="carousel_image" src="../comps/../../assets/img/beach.jpg"/>'
    }
    else if(slide === 2){
        imgDiv.innerHTML = '<img id="carousel_image" src="../comps/../../assets/img/desert.jpg"/>'
    }
    else if (slide === 3){
        imgDiv.innerHTML = '<img id="carousel_image" src="../comps/../../assets/img/grassland.jpg"/>'
    }
    else if (slide === 4){
        imgDiv.innerHTML = '<img id="carousel_image" src="../comps/../../assets/img/volcano.jpg"/>'
    }
}
let slide = 1;

function changeSlide(status){
    console.log("click");
    if (status){slide++}
    else{slide--}
    if(slide < 1){
        slide = 4
    }
    else if(slide > 4){
        slide = 1
    }
    CarouselImage(slide)
}

function addListener(){
    document.getElementById("back_button").addEventListener("click", () => {changeSlide(false); console.log("Hello World");})
    document.getElementById("forward_button").addEventListener("click", () => {changeSlide(true)})

    imgDiv = document.getElementById("carousel_image_div") 
    imgDiv.innerHTML =`<img id="carousel_image" src="../comps/../../assets/img/beach.jpg"/>`
}

function Carousel(){
    setTimeout(() => {addListener(); CarouselImage(slide)}, 100)
    return(`
        <div id="carousel">
            <div id="carousel_image_div"></div>
            <button id="back_button" class="changeSlide"">&#10094;</button>
            <button id="forward_button" class="changeSlide"">&#10095;</button>
        </div>

        <style>
            @keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }

            #carousel{
                width: 40%;
                height: auto;

                position: relative;
                z-index: 1000;

                margin-bottom: 40px;
            }

            #carousel_image_div{
                width: 100%;
                height: 100%;
            }
            
            #carousel_image{
                width: 100%;
                height: 100%;
                
                border-radius: 10px;
                border-width: 4px;
                border-style: solid;
                border-color: var(--t-colour);

                aspect-ratio: 16/9;

                background-color: var(--t-colour);

                animation: fadeIn 1s;
            }

            .changeSlide{
                position: absolute;

                top: 50%;
                transform: translate(0, -50%);


                height: 70px;
                width: 70px;

                font-size: 30px;

                border-radius: 90px;
                border-width: 0px;

                background-color: var(--t-colour);

                transition: background-color 0.2s;

                
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            .changeSlide:hover{
                background-color: var(--t-colour-hover);
            }
            
            #forward_button{
                padding-left: 10px;
                right: -40px;
            }
            
            #back_button{
                padding-right: 10px;
                left: -30px;
            }

            @media only screen and (max-width: 600px)  {#carousel{display: none;}}
        </style>
        `
    )
}

export default Carousel;