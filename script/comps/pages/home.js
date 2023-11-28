import Carousel from "../carousel.js"
import Footer from "../footer.js"

function Home(){
    return(
        `
<div id="home">
    <img id="MobileImg" src="../../../assets/img/LogoMobile.png">
    <div id="video_container">
        <video muted autoplay id="video"><source src="../../../assets/LogoVid.mp4"></video>
    </div>
    ${Carousel()}
    ${Footer()}
</div>
        `
    )
}

export default Home
