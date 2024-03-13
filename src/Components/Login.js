import React from 'react';
import Header from './Header';
import { useState, useRef } from 'react';
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name= useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const handleButtonClick = () => {
    // Validate the form data
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
   
    const message = checkValidData(email.current.value, password.current.value, name.current.value);
    setErrorMessage(message);

    //Sign In / Sign Up

  }
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='logo'/>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input ref={name} type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700 bg-opacity-50' />)}
        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 bg-opacity-50' />
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 bg-opacity-50' />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already Registered? Sign In Now.."}</p>      
      </form>
    </div>
  )
}

export default Login