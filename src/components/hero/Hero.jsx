import React from 'react'
import './Hero.css'
import profile_img from '../../assets/me.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=""></img>
        <h1>
          <span>I'm Jason Nguyen,</span> a computer science graduate based in Canada
        </h1>
        <p>I received my Bachelor of Science at UBC majoring in Computer Science and Minoring in Statistics</p>
        <div className = "hero-action">
          <div className="hero-connect">
            Connect with me
          </div>
          <div className="hero-resume">
            My resume
          </div>
        </div>
    </div>
  )
}

export default Hero