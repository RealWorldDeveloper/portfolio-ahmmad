import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Skill from './component/skill/Skill'
import MyProject from './component/projects/Projects'
import Qualification from './component/qualifications/Qualification'
import Footer from './component/footer/Footer'
import Service from './component/service/Service'
function App() {

  return (
    <>
      <Header/>
      <Skill/>
     <MyProject/>
     <Service/>
     <Qualification/>
     <Footer/>
    </>
  )
}

export default App
