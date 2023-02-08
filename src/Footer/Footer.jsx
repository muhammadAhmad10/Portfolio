import React from "react"
import './Footer.css'
import {BsInstagram,BsTwitter,BsWhatsapp,BsLinkedin,BsGithub} from 'react-icons/bs'
 
export default function Footer(){
    return (
        <footer id="footer">
            <div className="head">
                <h2>Build Something</h2>
                <p className="p1">Want me to work togather? Drop me a message to start conversation.</p>
                <div className="whatsapp">
                <a rel="noreferrer" target="_blank" href="https://wa.me/0923018067153">
                    <div className="p2"><p>Let's chat</p><BsWhatsapp className="chat" /></div>
                </a>
                </div>
            </div>
            <div className="foot-div">
                <div className="quote">
                    <p>The desire to create is one of the deepest yearnings of the human soul.</p>
                </div>
                <div className="icons">
                <a className="a" rel="noreferrer" href="https://instagram.com/m_ahmad1023?igshid=YmMyMTA2M2Y=" target="_blank"><BsInstagram className="icon" /></a>
                <a className="a" rel="noreferrer" href="https://linkedin.com/in/muhammad-ahmad-5479241b0" target="_blank"><BsLinkedin className="icon" /></a>
                <a className="a" rel="noreferrer" href="https://github.com/muhammadAhmad10" target="_blank"><BsGithub className="icon" /></a>
                <a className="a" rel="noreferrer" href="https://twitter.com/ahmaddevtobe" target="_blank"><BsTwitter className="icon" /></a>
                </div>
                <div className="text">
                    <p>Created by me in January 2023</p>
                </div>
            </div>
        </footer>
    )
}