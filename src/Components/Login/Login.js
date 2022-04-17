import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import login from '../../image/signup-signout/signin-image.jpg';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Social from '../Social/Social';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('')
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  if (user) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    errorElement = <p className='text-red-700'>{ error.message}</p>
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
          toast('Email Sent For Password Reset');
    }
    else {
      toast('Please enter your email address')
    }
   
  };
  
 
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <section className="flex justify-center items-center mt-10  ">
      <div className="signup-container flex flex-col justify-center items-center md:flex-row rounded-lg">
        <div className="right-side mt-5">
          <img className="mx-auto" src={login} alt="" />
        </div>
        <div className="left-side mt-6">
          <h3 className="text-3xl font-bold text-center mb-6">Login</h3>
          <form onSubmit={handelLogin} className="px-14">
            <p className="user-name mt-5 ">
              <label htmlFor="email" className="text-xl font-bold px-2">
                Email
              </label>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 user-icon mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>

              <input
                type="email" ref={emailRef}
                name="email"
                placeholder="Enter your email"
                required
              />
            </p>
            <p className="user-name mt-5 ">
              <label htmlFor="password" className="text-xl font-bold px-2">
                Password
              </label>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 user-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>

              <input
                type="password" ref = {passwordRef}
                name="password"
                placeholder="Enter your password"
                required
              />
            </p>
            <p className='mt-5'>{ errorElement}</p>
            <p className="mt-5">
              Don't have an account?
              <Link to="/signup" className="text-sky-500  px-2">
                Signup
              </Link>
            </p>
            <p className="mt-1">
              Forget Password?
              <span
                to="/signup"
                onClick={()=>resetPassword()}
                className="text-sky-500  px-2 cursor-pointer"
              >
                Reset Password
              </span>
            </p>
            <p className="mt-5">
              <input type="submit" value="Login" className="submit-btn" />
            </p>
          </form>
          <Social></Social>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
};

export default Login;
