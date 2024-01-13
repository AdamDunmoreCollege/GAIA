import Footer from "../footer.js"

function About(){
    return(
        `
<div id="about">
    <div class="parallax" id="volcano">
        <h2 class="about_text right_text">Recognizing the pivotal role of volcanoes in global biodiversity and climate regulation, our charity supports cutting-edge research to understand and preserve these ecosystems. By forging partnerships with local governments and international organizations, we advocate for the integration of volcano conservation into broader environmental agendas. Our aim is to ensure that these magnificent geological formations continue to inspire wonder and contribute to the planet's ecological balance for generations to come.</h2>
    </div>
    <div class="parallax" id="desert">
        <h2 class="about_text left_text">Acknowledging the crucial role deserts play in global ecosystems and climate regulation, our charity is dedicated to advancing research for the understanding and preservation of these arid landscapes. Through collaborations with local authorities and international organizations, we advocate for the inclusion of desert conservation in broader environmental initiatives. Our goal is to guarantee that these vast, unique ecosystems remain a source of inspiration and contribute to the Earth's ecological equilibrium for future generations.</h2>
    </div>
    <div class="parallax" id="grassland">
        <h2 class="about_text right_text">
        Understanding the pivotal contribution of nature to global ecosystems and overall well-being, our charity is dedicated to advancing research for the comprehension and preservation of diverse natural environments. Through collaborations with local and international entities, we advocate for the integration of nature conservation into broader environmental initiatives. Our objective is to ensure that the richness and biodiversity of natural landscapes endure, fostering a sustainable balance for future generations.</h2>
    </div>
    <div class="parallax" id="beach">
        <h2 class="about_text left_text">Devoted to ocean preservation, our charity collaborates with scientists, conservationists, and governments to combat plastic pollution and overfishing. Through sustainable fishing practices and beach clean-ups, we strive to restore and protect marine habitats. Public awareness and education initiatives aim to inspire global commitment to safeguarding the world's oceans for future generations.</h2>
    </div>
    ${Footer()}
</div>
        `
    )
}

export default About;