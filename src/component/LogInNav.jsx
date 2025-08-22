import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { ChevronDown, ChevronUp } from 'lucide-react'
import user from '../assets/user.png'

const LoginNav = () => {
    // state to manage the dropdown Menu
    const [menu,setMenu]=useState(false)
    console.log(menu);
    
  return (
    <div className='container mx-auto w-11/12 relative'>
           <nav className='flex justify-between md:justify-between py-4 items-center'>
               {/* logo (left section) */}
               <div className='flex items-center gap-5 md:w-full'>
                    <span><img src="" alt="" /></span>
                   <span className='max-w-[200px] md:min-w-[180px]'><img src={logo} alt="logo" className='cursor-not-allowed'/></span>   
               </div>
   
                    <ul className='hidden md:flex md:text-[16px] lg-[25px] md:space-x-3 lg:space-x-5  flex font-semibold text-white items-center md:justify-between w-full'>
                       <li className='hover:text-[hsla(153,43%,42%,1)] cursor-not-allowed text-nowrap'>Home</li>
                       <li className='hover:text-[hsla(153,43%,42%,1)] cursor-not-allowed text-nowrap'>Properties</li>
                       <li className='hover:text-[hsla(153,43%,42%,1)] cursor-not-allowed text-nowrap'>About us</li>
                       <li className='hover:text-[hsla(153,43%,42%,1)] cursor-not-allowed text-nowrap'>Blog</li>
                       <li className='hover:text-[hsla(153,43%,42%,1)] cursor-not-allowed text-nowrap'>Contact Us</li>
                   </ul>
   
               {/* menu (right section)(login/ sign up) */}
               <div className='flex items-center justify-end w-full gap-3'>
                   <span className='md:border-4 border-3  border-gray-100 rounded-full'><img src={user} alt="" className='md:size-12 size-6 rounded-full'/></span>
                   <p className='text-[14px] hidden md:flex font-semibold text-white'>Micheal Idioha</p>
                   <button className='text-gray-700 ' onClick={()=>setMenu(!menu)}>{menu?<ChevronUp className='text-white'/>:<ChevronDown className='text-white'/>}</button>
                   
                   {/* (login/ sign up) 
                   <div className='space-x-3 font-semibold hidden  md:flex w-full flex justify-end'>
                       <button  disabled={true} className='text-white hover:text-black  cursor-not-allowed  py-1 px-5 border border-white rounded-md '>Sign In</button>
                       <button  disabled={true} className='bg-[hsla(153,43%,42%,1)] hover:bg-[hsla(153,43%,42%,1)] cursor-not-allowed py-1 px-5 rounded-md text-white font-semibold'>Login</button>
                   </div> */}
               </div>
   
   
           </nav>
           {/* {
               menu && 
               <div className='flex flex-col gap-8 text-white bg-[hsl(257,27%,26%)] text-semibold text-center w-full py-10 px-5 absolute rounded-md md:hidden z-2'>
                   <ul className='space-y-4' >
                        <li className='hover:text-black cursor-not-allowed'>Home</li>
                       <li className='hover:text-black cursor-not-allowed'>Properties</li>
                       <li className='hover:text-black cursor-not-allowed'>About us</li>
                       <li className='hover:text-black cursor-not-allowed'>Blog</li>
                       <li className='hover:text-black cursor-not-allowed'>Contact Us</li>
                   </ul> */}



                  {/* the thin horizontal line  in the dropdown menu  */}


                  {/* <div className='w-full border border-gray-600 '></div>
                  <div className='flex flex-col gap-4 '>
                   <button disabled className='text-gray-400 hover:text-black cursor-pointer cursor-not-allowed' >Login</button>
                   <button  disabled={true} className='bg-[hsla(153,43%,42%,1)] py-2 rounded-full cursor-not-allowed'>Sign up</button>
                  </div>
               </div>
           } */}
       </div>
  )
}

export default LoginNav
