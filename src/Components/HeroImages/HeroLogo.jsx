import React from 'react'
// import Hero from "../assests/Hero.png";
import Hero from "./Hero.png"
import "./HeroLogo.css"
function HeroLogo() {
  return (
    <div>
        <img className='hero'  src={Hero} alt="Hero" />
    </div>
  )
}

export default HeroLogo