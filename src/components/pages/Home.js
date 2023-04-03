import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'

import HeroSection from '../HeroSection'
import Navbar from '../Navbar'

function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Cards></Cards>
        <Footer></Footer>
    </div>
  )
}

export default Home
