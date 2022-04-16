import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='w-[80%] mx-auto min-h-[80px] flex flex-col md:flex-row justify-between items-center sticky top-0 mb-8'>
            <h1 className='text-3xl font-bold text-green-500'>Live Long Go Long</h1>
            <ul className='items-container'>
                <Link to='/home'>Home</Link>
                <Link to='/checkout'>CheckOut</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/aboutme'>About me</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
             </ul>
        </nav>
    );
};

export default Header;