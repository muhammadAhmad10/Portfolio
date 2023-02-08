import React from "react"
import './Front.css'
import logo from './logo.svg'
import image from './myPic.png'

export default function Front(){
    return (
        <div id="intro">
            <div className="front">
            <div className="left">
                <h1 className="name">Mobile App Developer & Machine Learning Enthusiast</h1>
                <p>I design beautiful and amazing mobile apps and I love developing beautiful apps.</p>
            </div>
            <div className="right">
                <div className="picture">
                    <img src={image} alt="here is  of auther" />
                </div>
            </div>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            </div>
        </div>
    )
}

// ReactDOM.render(Front,document.getElementById('root'))