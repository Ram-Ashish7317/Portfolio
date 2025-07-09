import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from "../../assets/WhatsApp Image 2025-06-26 at 14.05.36_bb17793d.jpg";

const About = () => {
    return (
        <div className="about" id="about" >
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a dedicated Full Stack Developer skilled in building responsive, end-to-end web applications using the MERN stack.</p>
                        <p>I love turning ideas into scalable digital solutions through clean code, intuitive UI, and powerful backend logic.</p>


                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Bootstrap</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Tailwind CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Express</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Mongo DB</p><hr style={{width:"50%"}}/></div>
                        
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>INTERN</h1>
                    <p>@SM SERVICES</p>
                    <hr />
                </div>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default About;