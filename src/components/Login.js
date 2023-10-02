import checkValidData from '../utils/validate'
import Header from './Header'
import { useState, useRef } from 'react'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();


  const name = useRef('');
  const email = useRef('');
  const password = useRef('');

  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value, name.current.value);

    setErrorMessage(message);

    if(message) return;

    //Sign in/sign up message
    if(!isSignInForm) {
      //Sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/89624003?v=4"
    }).then(() => {
      const { uid, email, displayName, photoURL } = auth.currentUser;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
      navigate("/browse");
    }).catch((error) => {
      setErrorMessage(error);
    });
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+'-'+errorMessage);
    // ..
  });

      
    } else {
      //Sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage("ERROR: User not found");
  });
    }
      
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

      <form onSubmit={(e) => e.preventDefault()} className='p-12 bg-black absolute w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' action="">
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm
            ? "Sign In" 
            : "Sign Up"}
        </h1>

        {!isSignInForm && (<input 
          ref={name}
          type="text" 
          placeholder='Full Name' 
          className='p-4 my-4 w-full bg-gray-700'
        />
        )}
        
        <input 
          ref={email}
          type="text" 
          placeholder='Email Address' 
          className='p-4 my-4 w-full bg-gray-700'
        />
        
        <input 
          ref={password}
          type="password" 
          placeholder='password' 
          className='p-4 my-4 w-full bg-gray-700'
        />
        
          <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
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