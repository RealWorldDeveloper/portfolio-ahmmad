import React from 'react'
import './header.css'
import Nav from '../header/navbar/Nav'
import Hero from '../header/hero/Hero'
import About from '../header/about/About'
function Header() {
  return (
    <div className='header'>
      <Nav/>
      <Hero/>
      <About/>
    </div>
  )
}

export default Header