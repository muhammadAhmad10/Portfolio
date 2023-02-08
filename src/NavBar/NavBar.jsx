import React from "react"
import './NavBar.css'
import logo from './aaaaa.png'
import { AiOutlineMenu } from 'react-icons/ai'

export default function NavBar() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <nav id="navbar">
            <div className="name">
                <img style={{width:120,height:40}} src={logo} alt="Ahmad" />
            </div>
            <div className="links">
                <a href="#about-section">About</a>
                <a href="#skills-section">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact-section">Contact</a>
            </div>
            <div onClick={() => { openNav() }} className="lines">
                <AiOutlineMenu className="line" />
            </div>
            <div id="mySidenav" className="sidenav">
                <a href="#navbar" className="closebtn" onClick={() => { closeNav() }}>&times;</a>
                <a href="#about-section" onClick={() => { closeNav() }}>About</a>
                <a href="#skills-section" onClick={() => { closeNav() }}>Skills</a>
                <a href="#projects" onClick={() => { closeNav() }}>Projects</a>
                <a href="#contact-section" onClick={() => { closeNav() }}>Contact</a>
            </div>
        </nav>
        // </header>
    )
}

