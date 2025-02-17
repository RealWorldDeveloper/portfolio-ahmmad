import React from 'react'
import './hero.css'
import { FcDownload } from "react-icons/fc";
import resume from '../../../assets/files/Ahmmad.pdf'
function Hero() {
  return (
    <>
   <div className="container mt-3 border-bottom border-dark py-4">
        <h1 className='hero text-white' >Hi, </h1>
        <h1 className='hero text-white' >I am <span className='hero-ahmmad'>AHMMAD</span>, </h1>
        <h1 className='hero text-white'>Full Stack Developer</h1>
        <h3 className='hero-title fs-5 text-white mb-4'>Front-End || Back-End || MERN</h3>
      <a href = {resume} download= 'Resume' className='btn btn-outline-info py-2'>Download Resume <FcDownload fontSize={20}/>
      </a>
      </div>
    </>
  )
}

export default Hero