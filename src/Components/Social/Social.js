import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../image/social-icon/google.png'
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth, { sendEmailVerification: true });
    const handelGoogleSignIn = () => {
        signInWithGoogle();
    }
    const navigate = useNavigate();
    const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  if (user) {
    navigate(from, { replace: true });
  }
    return (
        <div className='mt-5'>
            <div className="social-divider flex justify-center items-center">
                <div className='h-[1px] w-full bg-gray-500'></div>
                <p className='px-4'>OR</p>
                <div className='h-[1px] w-full bg-gray-500'></div>
            </div>
            <div className='text-center w-full mt-2'>
            <button onClick={handelGoogleSignIn} className='flex bg-green-400 text-white font-bold px-5 py-4 gap-3 rounded-lg mx-auto'> <img className='w-5 h-5 ' src={ google} alt="" /> <span>Google Sign In</span> </button>
            </div>
        </div>
    );
};

export default Social;