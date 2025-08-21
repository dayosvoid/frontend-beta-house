import React from 'react'
import Nav from '../component/Nav'
import Hero from '../component/Hero'
import Properties from '../component/Properties'
import Footer from '../component/Footer'

const OnboardingPage = () => {
  return (
    <div>
        <div className='hero-section'>
            <div className='overlay'></div>
            <div className=' relative z-2'>
                <Nav className=""/>
                <Hero/>
            </div>
        </div>
        <Properties/>
        <Footer/>
    </div>
  )
}

export default OnboardingPage
