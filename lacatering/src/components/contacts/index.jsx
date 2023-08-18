import React from "react";
import './contacts.scss'

const Contacts = () => {
    return (
        <div className="contacts-container G-flex-column">
            <h2 className="contact">Contact</h2>
            <div className="contact-text-block">
                <p className="contact-text">We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
                <p className="contact-text address">Catering Service, 42nd Living St, 43043 New York, NY</p>
                <p className="contact-text">You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            </div>
            <input className="contact-input" placeholder="Name" />
            <input className="contact-input" placeholder="How many people" />
            <input type="date" className="contact-input" />
            <input className="contact-input" placeholder="Message/Special requirements" />
            <div className="btn-cont ">
                <button className="message">Send Message</button>
            </div>

        </div>
    )
}

export default Contacts