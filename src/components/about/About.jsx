import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src = {theme_pattern}></img>
        </div>
        <div className="about-sections">
            <img src = {profile_img}></img>
        </div>
    </div>
  )
}

export default About