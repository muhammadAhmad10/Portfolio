import React from "react"
import './Contact.css'


export default function Contact(){
    return (
        <section id="contact-section">
            <div className="heading">
                <div className="inner">
                <h2>Contact</h2>
                <hr/>
                </div>
            </div>
        <div className="contact-form">
            <input className="input" type="text" placeholder="Enter your name" />
            <br />
            <input className="input" type="text" placeholder="Enter your email" />
            <br />
            <textarea placeholder="Write something" className="textarea"></textarea>
            <input value="Submit" type="button" className="button" />  
        </div>
        </section>
    )
}