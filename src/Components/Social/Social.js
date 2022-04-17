import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../image/social-icon/google.png'
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handelGoogleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div className='mt-5'>
            <div className="social-divider flex justify-center items-center">
                <div className='h-[1px] w-full bg-gray-500'></div>
                <p className='px-4'>OR</p>
                <div className='h-[1px] w-full bg-gray-500'></div>
            </div>
            <div className='text-center w-full mt-2'>
            <button onClick={handelGoogleSignIn} className='flex bg-purple-300 px-6 py-5 gap-2 rounded-lg mx-auto'> <img className='w-5 h-5 ' src={ google} alt="" /> <span>Google Sign In</span> </button>
            </div>
        </div>
    );
};

export default Social;