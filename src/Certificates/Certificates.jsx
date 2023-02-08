import React from "react";
import './Certificates.css';
import {RiArrowRightSLine} from 'react-icons/ri'
import certificate1 from './certificate1.png'
import certificate2 from './web-certificate1.png'


export default function Certificates(){
    return(
        <section className="certificate-section">
            <div className="certification">
                <div className="heading1">
                    <h1>Certificates</h1>
                    <br/>
                    <hr />
                </div>
                <div className="certificates">
                    <div className="certificate">
                        <div className="img-div">
                            <img src={certificate2} alt="Certificate 1" />
                        </div>
                        <div className="text-div">
                            <div className="cName">
                                <p>Responsive Web Design</p>
                                <p>- freeCodeCamp</p>
                            </div>
                            <a href="https://freecodecamp.org/certification/Muhammad-Ahmad/responsive-web-design">
                                <div className="view">
                                <p>View</p>
                                <RiArrowRightSLine className="arrow" />
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="certificate">
                        <div className="img-div">
                            <img src={certificate1} alt="Certificate 1" />
                        </div>
                        <div className="text-div">
                            <div className="cName">
                                <p>What's your big idea?</p>
                                <p>- Coursera</p>
                            </div>
                            <a href="https://firebasestorage.googleapis.com/v0/b/muhammad-ahmad-39722.appspot.com/o/Coursera%20Certificate.pdf?alt=media&token=1d12eaf9-eb49-42f6-90c5-4c75e9c84c69">
                                <div className="view">
                                <p>View</p>
                                <RiArrowRightSLine className="arrow" />
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="more">
                    <div className="moree">
                    <a rel="noreferrer" href="https://github.com/muhammadAhmad10" target="_blank"><p>More</p></a>
                    </div>
                </div>
            </div>
        </section>
    )
}