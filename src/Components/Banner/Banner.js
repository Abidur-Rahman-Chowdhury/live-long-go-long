import React from 'react';
import './Banner.css';
import banner from '../../image/banner/Banner.png'
const Banner = () => {
    return (
        <div>
            <div className='banner-container grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center'>

              
                <div className='banner-text'>
                    <h2 className='text-6xl font-bold text-white'>Hi, I'm Abidur Rahman </h2>
                    <p className='mt-4 text-white text-xl'>Your new Personal Coach for better life!</p>
                    <button className='banner-btn'>Contact Me</button>
                </div>
                <div className='banner-image'>
                    <img src={banner} alt="" />
                   </div>
            </div>
            
        </div>
    );
};

export default Banner;