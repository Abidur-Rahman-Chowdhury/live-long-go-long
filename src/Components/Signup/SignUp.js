import React from 'react';
import './SignUp.css';

import signup from '../../image/signup-signout/signup-image.jpg';

const SignUp = () => {
  return (
    <section className="flex justify-center items-center mt-10 ">
      <div className="signup-container grid grid-cols-1 md:grid-cols-2 gap-x-4 p-12 rounded-lg border-gray-400">
        <div className="left-side">
          <h3 className="text-3xl font-bold text-center">Sign up</h3>
          <form className="px-14">
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

              <input type="text" name="name" placeholder="Enter your name" required />
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
            <p className='mt-5'><input type="submit" value="Submit" className='submit-btn' /></p>
          </form>
        </div>
              <div className="right-side ">
                  <img src={signup} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
