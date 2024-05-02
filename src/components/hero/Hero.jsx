import React from 'react'
import './Hero.css'
import profile_img from '../../assets/me.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=""></img>
        <h1>
          <span>I'm Jason Nguyen,</span> an aspiring software developer based in Canada
        </h1>
        <p>I have extensive experience in front-end development, with some exploration into back-end work.</p>
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