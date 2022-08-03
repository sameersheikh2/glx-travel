import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

const training = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="TRAINING" text="Pre-Flight & In Flight Trainig"  />
      <Footer/>
    </div>
  )
}

export default training