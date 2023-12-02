import React from 'react'
import './HeroImage.css'
import HeroLogo from './HeroLogo';

const HeroImage = () => {
  return (
    <div className='heroimage'>
        <div>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
        </div>
        
        <div className='herologo'><HeroLogo /></div>
    </div>
  )
}

export default HeroImage