import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.png'
import profile_img from '../../assets/actual.png'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="theme_pattern" />

        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="profile_img" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m a creative and web developer driven by structure, storytelling, and craftsmanship. I enjoy turning complex ideas into clean, functional digital experiences that people actually enjoy using.</p>
                    <p>Good design should feel effortless.Good code should stay invisible.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"55%"}} /></div>
                    <div className="about-skill"><p>Adobe illustrator</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>DavinciResolve</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>Adobe PhotoShop</p><hr style={{width:"70%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievemant">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievemant">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievemant">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>

        </div>
      
    </div>
  )
}

export default About
