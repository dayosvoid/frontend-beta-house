import React, { useEffect, useState } from 'react'
import google  from '../assets/signin/google.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate()
const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
}
const [formValue, setFormValue] = useState(initialState)
const [error, setError] = useState({})
const [isSubmit, setIsSubmit] = useState(false)
const [loader, setLoader] = useState(false)

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value })
    
    // Clear specific field error when user starts typing
    if (error[name]) {
        setError({ ...error, [name]: "" })
    }
    console.log(formValue);
}

const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(formValue)
    setError(validationErrors)
    setIsSubmit(true)
}

useEffect(() => {
    if (isSubmit) {
        // Only submit if there are no validation errors
        if (Object.keys(error).length === 0) {
            setLoader(true)
            axios.post("https://backend-beta-house.onrender.com/user/register", formValue)
                .then(result => {
                    console.log(result)
                    setLoader(false)
                    navigate('/login')
                })
                .catch(err => {
                    console.log(err)
                    setLoader(false)
                    // Handle server errors here
                })
        }
        setIsSubmit(false) // Reset submission state
    }
}, [isSubmit, error]) // Depend on both isSubmit and error

const validate = (value) => {
    const error = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!value.firstName) {
        error.firstName = "First name is required!"
    } else if (value.firstName.length < 3) {
        error.firstName = 'First name is too short'
    }

    if (!value.lastName) {
        error.lastName = "Last name is required!"
    } else if (value.lastName.length < 3) {
        error.lastName = 'Last name is too short'
    }

    if (!value.email) {
        error.email = "Email is required"
    } else if (!regex.test(value.email)) {
        error.email = "Invalid Email"
    }

    if (!value.password) {
        error.password = "Password is required"
    } else if (value.password.length < 8) {
        error.password = "Password must be 8 characters long"
    }

    if (!value.confirmPassword) {
        error.confirmPassword = "Please confirm password"
    } else if (value.confirmPassword !== value.password) {
        error.confirmPassword = "Passwords don't match"
    }

    return error
}
    
  return (
    <div className='md:relative h-full md:min-h-screen'>
        <div className='md:flex container w-11/12 md:min-w-11/12 min-h-screen items-center mx-auto gap-10'>
            {/* mobile just form*/}
            <div className='flex flex-col justify-center text-[16px] items-center py-10 space-y-2 h-full md:w-[50%]'>
                <h2 className='font-bold text-center text-gray-800 md:text-start'>Join our community of home seekers and explore the possibilities that await. </h2>
                <p className='w-full text-[12px] text-center font-semibold text-gray-500 md:text-start'>Lets get started by filling out the information below</p>
                <form onSubmit={handleSubmit}className='pt-5 space-y-1.5 text-[16px] w-full '>
                   <div className='flex gap-4 w-full '>
                    {/* first name */}
                    <div className='relative w-full'>
                        <label htmlFor="" className='font-semibold text-gray-500 text-sm  w-full relative'> First Name
                            <input type="text" placeholder='Enter Name' name="firstName" value={formValue.firstName} onChange={handleChange} className='border-2 text-[16px] focus:border-[hsla(153,43%,42%,1)] focus:outline-none border-gray-300 rounded-md py-1 pl-2 w-full'/>
                        </label>
                        <p className='error'>{error.firstName}</p>
                    </div>

                   
                    {/* last name */}
                    <div className='relative w-full'>
                        <label htmlFor="" className='font-semibold text-gray-500 text-sm w-full relative'> Last Name
                            <input type="text" placeholder='Enter Name' name="lastName" value={formValue.lastName} onChange={handleChange} className='border-2 text-[16px] focus:border-[hsla(153,43%,42%,1)] focus:outline-none border-gray-300 rounded-md py-1 pl-2 w-full'/>
                        </label>
                         <p className='error'>{error.lastName}</p>
                    </div>
                    
                    
                    </div> 
                    {/* email */}
                    <div className='relative'>
                        <label htmlFor="" className='font-semibold text-gray-500 text-sm w-full relative'>Email
                            <input type="email" placeholder='Enter your Email' name="email" value={formValue.email} onChange={handleChange} className='border-2 text-[16px] focus:border-[hsla(153,43%,42%,1)] focus:outline-none border-gray-300 rounded-md py-1 pl-2 w-full'/>
                        </label>
                            <p className='error'>{error.email}</p>

                    </div>

                    {/* password */}
                    <div className='relative'>
                        <label htmlFor="" className='font-semibold text-gray-500 text-sm w-full relative'>Password
                            <input type="password" placeholder='Enter your password' name="password" value={formValue.password} onChange={handleChange} className='border-2 text-[16px] focus:border-[hsla(153,43%,42%,1)] focus:outline-none border-gray-300 rounded-md py-1 pl-2 w-full' />
                        </label>
                            <p className='error'>{error.password}</p>

                    </div>
                    
                    {/* confirm password */}
                    <div className='relative'>
                        <label htmlFor="" className='font-semibold text-gray-500 text-sm w-full relative'>Confirm Password
                            <input type="password" placeholder='comfirm your password' name="confirmPassword" value={formValue.confirmPassword} onChange={handleChange} className='border-2 focus:border-[hsla(153,43%,42%,1)] focus:outline-none text-[16px] border-gray-300 rounded-md py-1 pl-2 w-full' />
                        </label>
                            <p className='error'>{error.confirmPassword}</p>
                    </div>
                    
                    {/* terms of service */}
                    <span className='flex cursor-not-allowed font-semibold text-gray-500 text-[16px] gap-2 py-2'>
                        <input type="checkbox" name="" id="" />
                        <p>I agree to <span className='text-[hsla(153,43%,42%,1)] '>terms of sevice</span> and <span className='text-[hsla(153,43%,42%,1)] '>privacy policies</span></p>
                    </span>
                    {/* button/sign in */}
                    <button className=' py-1.5 bg-[hsla(153,43%,42%,1)] text-white font-semibold w-full rounded-md my-1 '>Sign up</button>

                    <div className='flex items-center gap-3'>
                    <span className='border-t border-gray-500 w-full'></span>
                    <p>or</p>
                    <span className='border-t border-gray-500 w-full'></span>
                </div>
                {/* google */}
                <button className=' py-1.5 cursor-not-allowed border-2 border-gray-500 text-gray-500 font-semibold w-full rounded-md '>
                    <span className='flex gap-3 w-full justify-center items-center text-[16px] py-1'>
                        <img src={google} alt="" className='size-4' />
                        <p>Continue with Google</p>
                    </span>
                </button>
                </form>

                {/* OR/hr */}

             <p className='w-full text-center font-semibold text-[12px] text-gray-500 py-5'>Already have an account? <Link to='/login'><span className='text-[hsla(153,43%,42%,1)]'>Sign in</span></Link></p>
            </div>
            {/*the image for desktop  */}
            <div className=' hidden md:flex w-[50%]'>
                {/* <div className='signIn absolute top-0 bottom-0 left-[ right-[-100px] w-200'></div> */}
            </div>
            {/* <div className='signIn relative top-0 bottom-0 left-1/2 right-0'></div> */}
        </div>
        <div className='signIn absolute top-0 bottom-0 right-0 left-[50%] hidden md:flex w-[50%]'></div>
    </div>
  )
}

export default SignUp
