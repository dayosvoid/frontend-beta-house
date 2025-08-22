import React, { useEffect, useState } from 'react'
import google  from '../assets/signIn/google.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate()
    const initialState = {
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    }
    const [formValue,setFormValue]=useState(initialState)
    const [error,seterror]=useState({})
    const [isSubmit,setIsSubmit] = useState(false)




    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormValue({...formValue, [name]: value })
        // setIsSubmit(false)
        console.log(formValue);
    }
 
    const handleSubmit = (e)=>{
        e.preventDefault()
        seterror(validate(formValue))
        setIsSubmit(true)
    }
    useEffect(() => {
        if(isSubmit){
            axios.post("https://backend-beta-house.onrender.com/user/register",formValue)
            .then(result => {console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))}
        }, [error])
    const validate = (value)=>{
        const error = {};
        const regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

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
    } else if (value.password.length < 6) {
        error.password = "Password is too short"
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
        <div className='md:flex container w-11/12 md:min-w-11/12 min-h-screen items-center mx-auto gap-5'>
            {/* mobile just form*/}
            <div className='flex flex-col justify-center items-center py-10 space-y-2 h-full md:w-[50%] md:px-5'>
                <h2 className='font-bold text-center text-gray-800 md:text-start'>Join our community of home seekers and explore the possibilities that await. </h2>
                <p className='w-full text-[12px] text-center font-semibold text-gray-500 md:text-start'>Lets get started by filling out the information below</p>
                <form onSubmit={handleSubmit}className='pt-5 space-y-1.5 w-full '>
                   <div className='flex gap-4 w-full '>
                    {/* first name */}
                    <label htmlFor="" className='font-semibold text-gray-500 text-sm w-full relative'> First Name
                        <input type="text" placeholder='Enter Name' name="firstName" value={formValue.firstName} onChange={handleChange} className='border-2 border-gray-300 rounded-md py-1 pl-2 w-full'/>
                         <p className='error'>{error.firstName}</p>
                    </label>
                   
                    {/* last name */}
                    <label htmlFor="" className='font-semibold text-gray-500 text-sm w-full relative'> Last Name
                        <input type="text" placeholder='Enter Name' name="lastName" value={formValue.lastName} onChange={handleChange} className='border-2 border-gray-300 rounded-md py-1 pl-2 w-full'/>
                        <p className='error'>{error.lastName}</p>
                    </label>
                    
                    </div> 
                    {/* email */}
                    <div>
                        <label htmlFor="" className='font-semibold text-gray-500 text-sm w-full relative'>Email
                            <input type="email" placeholder='Enter your Email' name="email" value={formValue.email} onChange={handleChange} className='border-2 border-gray-300 rounded-md py-1 pl-2 w-full'/>
                            <p className='error'>{error.email}</p>
                        </label>
                    </div>

                    {/* password */}
                    <div>
                        <label htmlFor="" className='font-semibold text-gray-500 text-sm w-full relative'>Password
                            <input type="password" placeholder='Enter your password' name="password" value={formValue.password} onChange={handleChange} className='border-2 border-gray-300 rounded-md py-1 pl-2 w-full' />
                            <p className='error'>{error.password}</p>
                        </label>
                    </div>
                    
                    {/* confirm password */}
                    <div>
                        <label htmlFor="" className='font-semibold text-gray-500 text-sm w-full relative'>Confirm Password
                            <input type="password" placeholder='comfirm your password' name="confirmPassword" value={formValue.confirmPassword} onChange={handleChange} className='border-2 border-gray-300 rounded-md py-1 pl-2 w-full' />
                            <p className='error'>{error.confirmPassword}</p>
                        </label>
                    </div>
                    
                    {/* terms of service */}
                    <span className='flex font-semibold text-gray-500 text-sm gap-2 py-2'>
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
                <button className=' py-1.5 border-2 border-gray-500 text-gray-500 font-semibold w-full rounded-md '>
                    <span className='flex gap-3 w-full justify-center items-center text-sm py-1'>
                        <img src={google} alt="" className='size-4' />
                        <p>Continue with Google</p>
                    </span>
                </button>
                </form>

                {/* OR/hr */}

                <p className='w-full text-center font-semibold text-[12px] text-gray-500 py-5'>Already have an account? <span className='text-[hsla(153,43%,42%,1)]'>Sign in</span></p>
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
