import React from 'react'
import Nav from '../component/Nav'
import Hero from '../component/Hero'
import Properties from '../component/Properties'
import Footer from '../component/Footer'
import LoginNav from '../component/LogInNav'


const HomePage = () => {
  return (
    <div>
        <div>
        <div className='hero-section'>
            <div className='overlay'></div>
            <div className=' relative z-2'>
                <LoginNav className=""/>
                <Hero/>
            </div>
        </div>
        <Properties/>
        <Footer/>
    </div>
    </div>
  )
}

export default HomePage
