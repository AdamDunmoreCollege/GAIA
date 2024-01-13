import Footer from "../footer.js"

function Contact(){
    return(
        `
<div id="contact">
    <div id="contact_container">
        <div id="contact_padding">
            <input placeholder="Email" id="email" class="contact_inputs">
            <textarea id="message" placeholder="Message" class="contact_inputs"></textarea>
            <button id="send_email" class="contact_inputs">Send</button>
        </div>
        <div id="other_contact">
                <h2 class="contact_info">Want to contact us another way?</h2>
                <h4 class="contact_info">Telephone: 01111 11111</h4>
                <h4 class="contact_info">Email: example@example.com</h4>
                <h4 class="contact_info">Address:<br>GAIA<br>13 Example Road<br>Example City, Example Country<br>AA11 1AA</h4>
        </div>
    </div>
    ${Footer()}
</div>
        `
    )
}

export default Contact;