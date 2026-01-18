import React from 'react'
import './Hero.css'
import profile_img from '../../assets/hero1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="profile_img" className="profile_img" />
      <h1><span>I'm Levi Were,</span> a creative and frontend developer based in Uganda.</h1>
      <p>Designing  thoughtful digital experiences with clarity, structure and purpose. I believe good work comes form intention, not rushing</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
