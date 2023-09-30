import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {

  const [isSignInForm, setIsSignInForm] = React.useState(true)
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
    
      <div className='absolute'>
        <img className='w-screen h-screen object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
          alt="logo" 
        />
      </div>
      
      <form className='p-12 bg-black absolute w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' action="">
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm
            ? "Sign In" 
            : "Sign Up"}
        </h1>

        <input 
          type="text" 
          placeholder='Email Address' 
          className='p-4 my-4 w-full bg-gray-700'
        />
        
        {!isSignInForm && (<input 
          type="text" 
          placeholder='Full Name' 
          className='p-4 my-4 w-full bg-gray-700'
        />
        )}
        
        <input 
          type="password" 
          placeholder='password' 
          className='p-4 my-4 w-full bg-gray-700'
        />
        
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
        {isSignInForm
          ? "Sign In" 
          : "Sign Up"}
        </button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm
          ? "New to Netflix? Sign Up Now" 
          : "Already registered? Sign In Now"}
        </p>
      
      </form>
    </div>
  )
}

export default Login