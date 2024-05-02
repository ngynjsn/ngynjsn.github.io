import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/me.gif'

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src = {theme_pattern}></img>
        </div>
        <div className="about-sections">
            <div className="about-left">
              <img src = {profile_img}></img>
            </div>
          <div className="about-right">
            <div className="about-para">
              <p>I am a 2024 graduate from the University of British Columbia. I received my Bachelor of Science <span>majoring in Computer Science</span> and <span>minoring in Statistics.</span></p>
              <p>While at UBC, I engaged in <span>13 months</span> of professional <span>Software Development</span> in the co-op program.</p>
              <p>8 months at a start-up company named <span>Castofly Technologies Inc.</span></p>
              <p>5 months at a company named <span>Calabrio Inc.</span></p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About