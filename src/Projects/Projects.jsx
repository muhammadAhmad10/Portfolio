import React from "react"
import './Projects.css'
import surverForm from './survey-form-pic.png'
import technicalDocument from './technical-document-pic.png'
import tributePage from './tribute-page.png'
import { RiArrowRightSLine } from 'react-icons/ri'

export default function Projects() {
    return (
        <section id="projects">
            <div className="projects">
                <div className="title">
                    <div>
                        <h2>Projects</h2>
                        <hr />
                    </div>
                </div>
                <div className="project-div">
                    <div className="project1">
                        <div className="img-div">
                            <img src={surverForm} alt="Survey Form" />
                        </div>
                        <div className="text-div1">
                            <div className="ccName">
                                <p>Survey form which I build when I was doing course from freeCodeCamp</p>
                                <p>- HTML, CSS</p>
                            </div>
                            <a href="https://github.com/muhammadAhmad10">
                                <div className="view1">
                                    <p>View</p>
                                    <RiArrowRightSLine className="arrow" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="project1">
                        <div className="img-div">
                            <img src={tributePage} alt="Tribute Page" />
                        </div>
                        <div className="text-div1">
                            <div className="ccName">
                                <p>Tribute page which I build when I was doing course from freeCodeCamp</p>
                                <p>- HTML, CSS</p>
                            </div>
                            <a href="https://github.com/muhammadAhmad10">
                                <div className="view1">
                                    <p>View</p>
                                    <RiArrowRightSLine className="arrow" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="project1">
                        <div className="img-div">
                            <img src={technicalDocument} alt="Technical Documentation" />
                        </div>
                        <div className="text-div1">
                            <div className="ccName">
                                <p>Technical document which I build when I was doing course from freeCodeCamp</p>
                                <p>- HTML, CSS</p>
                            </div>
                            <a href="https://github.com/muhammadAhmad10">
                                <div className="view1">
                                    <p>View</p>
                                    <RiArrowRightSLine className="arrow" />
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="more">
                    <div className="moree1">
                        <a rel="noreferrer" href="https://github.com/muhammadAhmad10" target="_blank"><p>More</p></a>
                    </div>
                </div>
            </div>
        </section>
    )
}