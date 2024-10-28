import React from 'react'
import { displayPartsToString } from 'typescript'
import bgimage from '../../Video/pexel.mp4'
import imag from '../../Video/cowlogo.png'
function HeroSection() {
  return (
    <div className='border-4 border-neutral-950 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... '><center className=''>
      {/*  */}
      <img src={imag} alt="image is not lod" className='min-h-14'/>
       <h1 className=' text-6xl '>Live_Stock</h1>
       </center>
       <video autoPlay loop muted className='border-4 border-neutral-950'>
        <source src={bgimage} type="video/mp4" />
       </video>
        </div>
  )
}

export default HeroSection