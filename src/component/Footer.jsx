import React from 'react'
import logo from "../assets/logo.png"
import message from "../assets/footer/message.png"
import icon from "../assets/carousel/icon.png"
import call from "../assets/footer/call.png"



const Footer = () => {
  return (
    <div className='bg-[hsla(153,94%,18%,1)] '>
       <div className='container w-11/12 mx-auto text-white flex flex-col gap-4 py-10 text-sm'>
            <div className='flex flex-col md:flex-row gap-10 text-center md:text-start items-center md:items-start md:justify-between pb-5'>
                <div className='flex flex-col gap-5 w-full items-center md:t md:w-[50%] md:items-start '>
                    {/* logo */}
                    <span className='max-w-[130px] md:min-w-[180px] cursor-not-allowed'><img src={logo} alt="logo"/></span>
                    {/* long note */}
                    <span>
                        <p>Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!</p>
                    </span>
                    {/* contact */}
                    <div className='text-start space-y-2'>
                        <span className='flex  cursor-not-alloweditems-center gap-2'>
                            <img src={icon} alt="location" />
                            <p>95 Tinubu Estate,Lekki,Lagos</p>
                        </span>
                        <span className='flex cursor-not-allowed items-center gap-4'>
                            <img src={call} alt="call" />
                            <p className=''>+234 675 8935 675</p>
                        </span>
                        <span className='flex cursor-not-allowed items-center gap-2'>
                            <img src={message} alt="inbox" />
                            <p>support@rentbetaHouse.com</p>
                        </span>
                    </div>
                </div> 

                {/* Quick links */}
                <div className='space-y-4 '>
                    <h2 className='font-semibold cursor-not-allowed text-lg'>Quick Links</h2>
                    <p className='cursor-not-allowed'>Home</p>
                    <p className='cursor-not-allowed'>Properties</p>
                    <p className='cursor-not-allowed'>About</p>
                    <p className='cursor-not-allowed'>Contact</p>
                    <p className='cursor-not-allowed'>Blog</p>
                </div>

                {/* More */}
                <div className='space-y-4 '>
                    <h2 className='font-semibold cursor-not-allowed text-lg'>More</h2>
                    <p className='cursor-not-allowed'>Agents</p>
                    <p className='cursor-not-allowed'>Affordable Houses</p>
                    <p className='cursor-not-allowed'>FAQ's</p>
                </div>

                {/* Popular Search */}
                <div className='space-y-4 '>
                    <h2 className='font-semibold cursor-not-allowed text-lg'>Popular Search</h2>
                    <p className='cursor-not-allowed'>Apartment for sale</p>
                    <p className='cursor-not-allowed'>Apartment for rent</p>
                    <p className='cursor-not-allowed'>3 bedroom flat</p>
                    <p className='cursor-not-allowed'>Bungalow</p>
                </div>

            </div>

            {/* last section */}
            <div className='text-center space-y-4 md:flex justify-between md:px-10 pt-5'>
                <p>Copyright 2023 Betahouse | Designed by Micheal.fig</p>
                <span className='cursor-not-allowed'>Privacy Policy</span>
            </div>
        </div>
                    {/* laptop screeb horizontal link */}
            <div className='min-w-full border-t border-gray-300  relative bottom-[120px] md:bottom-[90px] '></div>
    </div>
  )
}

export default Footer
