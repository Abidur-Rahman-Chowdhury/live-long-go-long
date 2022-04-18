import React from 'react';

import watermelon from '../../image/health-coach/watermelon-svgrepo-com.svg';
import shoes from '../../image/health-coach/shoes-svgrepo-com.svg';
import pulse from '../../image/health-coach/pulse-svgrepo-com.svg';
import timer from '../../image/health-coach/timer-svgrepo-com.svg';


const HealthCoach = () => {
    return (
        <div>
            <h2 className='text-center mt-10 text-[#444444] text-4xl italic font-serif font-bold '>Why people need a Health Coach</h2>
            <div className=" w-4/5 mx-auto gap-6  mt-10 card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className='flex flex-col justify-center items-center border rounded-lg p-6 '>
                    <img className='w-12 h-12 mb-3' src={watermelon} alt="" />
                    <h4 className='text-2xl mb-3'>Nutrition Strategies</h4>
                    <p>Healthy diet for body as well as for mind.</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-lg p-6'>
                <img className='w-12 h-12 mb-3' src={shoes} alt="" />
                    <h4 className='text-2xl mb-3'>Workout Routines</h4>
                    <p>Taking care of your body is important.</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-lg p-6'>
                <img className='w-12 h-12 mb-3' src={pulse} alt="" />
                    <h4 className='text-2xl mb-3'>Individual Support</h4>
                    <p>More of a friend than a health coach.</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-lg p-6'>  <img className='w-12 h-12 mb-3' src={timer} alt="" />
                    <h4 className='text-2xl mb-3'>First-Hand Advice</h4>
                    <p>Broad experience is always a bonus.</p></div>
            </div>
        </div>
    );
};

export default HealthCoach;