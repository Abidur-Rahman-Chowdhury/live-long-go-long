import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='bg-slate-200 sticky top-0 pb-7'>
             <nav className='w-[80%] mx-auto min-h-[80px] flex flex-col md:flex-row justify-between items-center  '>
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
       </header>
    );
};

export default Header;