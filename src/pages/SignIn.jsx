import React from 'react'
import { useEffect, useState } from 'react'
import google from '../assets/sign-in/google.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {
    const navigate = useNavigate()
    const initialState = {
        email: "",
        password: "",
    }
    const [formValue, setFormValue] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [isLoading, setIsLoading] = useState(false) // Added loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
        // Clear errors when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '', api: '' });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(formValue)); 
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log("Form is valid. Submitting data...", formValue);
            setIsLoading(true); 

            axios.post("https://backend-beta-house.onrender.com/user/login", formValue)
                .then(result => {
                    console.log("Success response:", result.data);
                    setIsLoading(false); 
                    
                    if (result.data.success === true) {
                          navigate('/HomePage')
                    } else {
                        setErrors({ api: { type: 'error', message: result.data.message || "Login failed." } });
                    }
                })
                .catch(err => {
                    console.error("Error during login:", err);
                    setIsLoading(false);
                    
                    let errorMessage = "Login failed. Please try again.";
                    
                    if (err.response && err.response.data) {
                        if (typeof err.response.data === 'string') {
                            errorMessage = err.response.data;
                        } else if (err.response.data.message) {
                            errorMessage = err.response.data.message;
                        }
                    } else if (err.message) {
                        errorMessage = err.message;
                    }
                    
                    setErrors({ api: { type: 'error', message: errorMessage } });
                });
                
            // Reset isSubmit
            setIsSubmit(false);
        }
    }, [errors, isSubmit, formValue, navigate]);

    const validate = (value) => {
        const validationErrors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!value.email) {
            validationErrors.email = "Email is required";
        } else if (!regex.test(value.email)) {
            validationErrors.email = "Invalid Email";
        }

        if (!value.password) {
            validationErrors.password = "Password is required";
        } else if (value.password.length < 6) {
            validationErrors.password = "Password is too short";
        }

        return validationErrors;
    }

    return (
        <div className='md:relative h-full md:min-h-screen'>
            <div className='md:flex container w-11/12 md:min-w-11/12 min-h-screen items-center mx-auto gap-5'>
                {/* Form section */}
                <div className='flex flex-col justify-center text-[16px] items-center py-10 space-y-2 h-full md:w-[50%]'>
                    <h2 className='font-bold text-center text-gray-800'>Welcome Back to BetaHouse!</h2>
                    <p className='text-[12px] text-center font-semibold text-gray-500'>Let's get started by filling out the information below</p>
                    
                    <form onSubmit={handleSubmit} className='pt-5 w-full max-w-md space-y-4'>
                        {/* API Error/Success Message */}
                        {errors.api && (
                            <div className={`text-center p-3 rounded-md ${
                                errors.api.type === 'success' 
                                    ? 'bg-green-100 text-green-700 border border-green-300' 
                                    : 'bg-red-100 text-red-700 border border-red-300'
                            }`}>
                                {errors.api.message}
                            </div>
                        )}
                        
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className='block font-semibold text-gray-500 text-sm mb-1'>
                                Email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder='Enter your Email' 
                                name="email" 
                                value={formValue.email} 
                                onChange={handleChange} 
                                className='border-2 border-gray-300 rounded-md py-2 pl-3 w-full focus:border-[hsla(153,43%,42%,1)] focus:outline-none'
                                disabled={isLoading}
                            />
                            {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
                        </div>
                        
                        {/* Password */}
                        <div>
                            <label htmlFor="password" className='block font-semibold text-gray-500 text-sm mb-1'>
                                Password
                            </label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder='Enter your password' 
                                name="password" 
                                value={formValue.password} 
                                onChange={handleChange} 
                                className='border-2 border-gray-300 rounded-md py-2 pl-3 w-full focus:border-[hsla(153,43%,42%,1)] focus:outline-none'
                                disabled={isLoading}
                            />
                            {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password}</p>}
                        </div>
                        
                        {/* Remember Me */}
                        <div className='flex font-semibold text-gray-500 text-sm gap-2 py-2'>
                            <input type="checkbox" name="rememberMe" id="rememberMe" disabled={isLoading} />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        
                        {/* Submit Button */}
                        <button 
                            type='submit' 
                            disabled={isLoading}
                            className={`py-2.5 text-white font-semibold w-full rounded-md my-2 transition-colors ${
                                isLoading 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-[hsla(153,43%,42%,1)] hover:bg-[hsla(153,43%,35%,1)]'
                            }`}
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                        
                        <div className='flex items-center gap-3'>
                            <span className='border-t border-gray-500 w-full'></span>
                            <p className='text-gray-500'>or</p>
                            <span className='border-t border-gray-500 w-full'></span>
                        </div>
                        
                        {/* Google Button */}
                        <button 
                            type='button' 
                            disabled={isLoading}
                            className={`py-2.5 border-2 font-semibold w-full rounded-md transition-colors ${
                                isLoading 
                                    ? 'border-gray-300 text-gray-400 cursor-not-allowed' 
                                    : 'border-gray-500 text-gray-500 hover:bg-gray-50'
                            }`}
                        >
                            <span className='flex gap-3 w-full justify-center items-center text-sm'>
                                <img src={google} alt="Google" className='size-4' />
                                <span>Continue with Google</span>
                            </span>
                        </button>
                    </form>
                    
                    {/* Sign Up Link */}
                    <p className='w-full text-center font-semibold text-[12px] text-gray-500 py-5'>
                        New User? <Link to="/signup" className='text-[hsla(153,43%,42%,1)] hover:underline'>Sign Up</Link>
                    </p>
                </div>
                
                {/* Image section for desktop */}
                <div className='hidden md:flex w-[50%]'>
                    {/* Background image content */}
                </div>
            </div>
            
            {/* Background decoration */}
            <div className='signIn absolute top-0 bottom-0 right-0 left-[50%] hidden md:flex w-[50%]'></div>
        </div>
    )
}

export default SignIn