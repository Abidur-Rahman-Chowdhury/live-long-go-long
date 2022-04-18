import React from 'react';

import profile from '../../image/About/profile.png'
const AboutMe = () => {
    return (
        <div className='mt-10 mb-[160px]'>
            <h2 className='text-center text-4xl font-bold italic font-serif text-[#22c55e]'>About Me</h2>
            <div className='mt-10 text-center'>
                <img src={profile} className='mx-auto w-[200px] h-[200px] rounded-full' alt="" />
                
                <h2 className='mt-4 text-3xl font-bold italic font-serif mb-4'>Abidur Rahman Chowdhury</h2>
                <p className='text-xl w-2/4 mx-auto'>Hello I am Abidur Rahman Chowdhury. I am your personal trainer in Live Long Go Long training Center . I have 4 Years of experience in this field. I work hard to give you the best service and make you fit and healthy. My goal is to serve more people in reasonable price so that every one can enjoy fit life and stay healthy. So that i am doing research in various sector to how can i more improve in my technique and healthy diet to give you so that anyone can maintain their body and weight. Hope all of you will support me like this. So everyone come and join in my mission and have a healthy and fit life.</p>
            </div> 
            
        </div>
    );
};

export default AboutMe;