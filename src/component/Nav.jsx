import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Nav = () => {
    // state to manage the dropdown Menu
    const [menu,setMenu]=useState(false)
    console.log(menu);
    
  return (
    <div className='container mx-auto w-11/12 relative'>
        <nav className='flex justify-between md:justify-between py-4 pt-7 items-center'>
            {/* logo (left section) */}
            <div className='flex items-center gap-5 md:w-full'>
                <span className='max-w-[200px] md:min-w-[180px]'><img src={logo} alt="logo" className='cursor-not-allowed '/></span>

               
            </div>

                 <ul className='hidden md:flex md:text-[16px] lg-[25px] md:space-x-3 lg:space-x-5  flex font-semibold text-white items-center md:justify-between w-full' >
                    <li className=' cursor-not-allowed text-nowrap'>Home</li>
                    <li className='cursor-not-allowed text-nowrap'>Properties</li>
                    <li className=' cursor-not-allowed text-nowrap'>About us</li>
                    <li className=' cursor-not-allowed text-nowrap'>Blog</li>
                    <li className=' cursor-not-allowed text-nowrap'>Contact Us</li>
                </ul>

            {/* menu (right section)(login/ sign up) */}
            <div className='flex items-center justify-end w-full'>
                <button className='text-gray-700  md:hidden' onClick={()=>setMenu(!menu)}>{menu?<X className='text-white'/>:<Menu className='text-white'/>}</button>
                
                {/*(login/ sign up)  */}
                <div className='space-x-2 font-semibold hidden  md:flex w-full flex items-center justify-end'>
                    <Link to='/signUp' className=''> <button   className='text-white hover:text-[hsla(153,43%,42%,1)]   cursor-pointer py-1 px-4 border border-white rounded-md text-nowrap'>Sign Up</button></Link>
                   <Link to='/login' className=''> <button   className='bg-[hsla(153,43%,42%,1)] hover:bg-[hsla(153,45%,71%,1.00)] cursor-pointer py-1.5 px-5 rounded-md text-white font-semibold'>Login</button></Link>
                </div>
            </div>


        </nav>
        {
            menu && 
            <div className='flex flex-col gap-8 text-white bg-[hsla(152,43%,19%,0.80)] font-bold text-center w-full py-10 px-5 absolute rounded-md rounded-b-r-full md:hidden z-2'>
                <ul className='space-y-4' >
                     <li className=' cursor-not-allowed'>Home</li>
                    <li className='cursor-not-allowed'>Properties</li>
                    <li className=' cursor-not-allowed'>About us</li>
                    <li className=' cursor-not-allowed'>Blog</li>
                    <li className=' cursor-not-allowed'>Contact Us</li>
                </ul>
               {/* the thin horizontal line  in the dropdown menu  */}
               <div className='w-full border border-gray-600 '></div>
               <div className='flex flex-col gap-4  '>
                <Link to='/login'><button  className='text-white hover:text-black cursor-pointer cursor-not-allowed' >Login</button></Link>
               <Link to='/SignUp'><button  className='bg-[hsla(155,41%,11%,1.00)] py-2 w-full rounded-full cursor-not-allowed'>Sign up</button></Link> 
               </div>
            </div>
        }
    </div>
  )
}

export default Nav
