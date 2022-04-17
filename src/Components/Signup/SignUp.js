import React from 'react';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import signup from '../../image/signup-signout/signup-image.jpg';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Social from '../Social/Social';

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let errorElement;
    if (error) {
      errorElement = <p className='text-red-700'>{ error.message}</p>
    }
  const handelOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
    toast('Your account is successfully created.Please verify your account through your email address!!')

   
  };
  return (
    <section className="flex justify-center items-center mt-10  ">
      <div className="signup-container flex flex-col justify-center items-center md:flex-row rounded-lg">
        <div className="left-side mt-6">
          <h3 className="text-3xl font-bold text-center mb-6">Sign up</h3>
          <form onSubmit={handelOnSubmit} className="px-14">
            <p className="user-name ">
              <label htmlFor="name" className="text-xl font-bold px-2">
                Name
              </label>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 user-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </p>
            <p className="user-name mt-5 ">
              <label htmlFor="email" className="text-xl font-bold px-2">
                Email
              </label>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 user-icon mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>

              <input
                type="email"
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
                class="h-5 w-5 user-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </p>
            <p>{errorElement}</p>
            <p className="mt-5">
              Already have an account ?
              <Link to="/login" className="text-sky-500 text-xl px-2">
                Login
              </Link>
            </p>
            <p className="mt-5">
              <input type="submit"  value="Submit" className="submit-btn" />
             
            </p>
          </form>
          <Social></Social>
        </div>
        <div className="right-side mt-5">
          <img className="mx-auto" src={signup} alt="" />
        </div>
      </div>
      
        <ToastContainer></ToastContainer>
    </section>
  );
};

export default SignUp;
