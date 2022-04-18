import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { name, img, price, des } = service;
    return (
        <div className='max-w-[400px]  border-2 rounded-lg pb-3 mt-10'>
            <img className='w-full' src={img} alt="" />
            <h4 className='text-2xl text-center font-bold font-serif text-[#22C55E] mt-5'>{name}</h4>
            <h3 className='text-center font-bold text-xl mt-3 mb-4'>Price: ${price}</h3>
            <p className='text-center px-3'>{des}</p>
            <div className='text-center mt-5'>
            <button className='px-7 bg-[#22C55E] py-2 text-white font-bold cursor-pointer rounded-md' onClick={()=> navigate('/checkout') }>Book Now</button>
            </div>
        </div>
    );
};

export default Service;