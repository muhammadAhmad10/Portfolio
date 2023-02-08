import React from "react"
import './Skills.css'

export default function Skills() {
    return (
        <section id="skills-section">
            <div className="skills-div">
                <h2>Skills</h2>
                <hr />
                <div className="skill">
                    <div className="name"><p>React Native</p></div>
                    <div className="value"><div className="RN"></div></div>
                    <div className="percent">80%</div>
                </div>
                <div className="skill">
                    <div className="name"><p>JavaScript</p></div>
                    <div className="value"><div className="JS"></div></div>
                    <div className="percent">50%</div>
                </div>
                <div className="skill">
                    <div className="name"><p>Firebase</p></div>
                    <div className="value"><div className="FB"></div></div>
                    <div className="percent">55%</div>
                </div>
                <div className="skill">
                    <div className="name"><p>React</p></div>
                    <div className="value"><div className="R"></div></div>
                    <div className="percent">40%</div>
                </div>   
                <div className="skill">
                    <div className="name"><p>HTML</p></div>
                    <div className="value"><div className="HTML"></div></div>
                    <div className="percent">40%</div>
                </div>
                <div className="skill">
                    <div className="name"><p>CSS</p></div>
                    <div className="value"><div className="CSS"></div></div>
                    <div className="percent">40%</div>
                </div>
                <div className="skill">
                    <div className="name"><p>MSSQL</p></div>
                    <div className="value"><div className="SQL"></div></div>
                    <div className="percent">50%</div>
                </div>
                <div className="skill">
                    <div className="name"><p>C/C++</p></div>
                    <div className="value"><div className="C"></div></div>
                    <div className="percent">30%</div>
                </div>
            </div>
        </section>
    )
}