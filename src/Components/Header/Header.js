import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handelSignOut = () => {
        signOut(auth);
    }
    return (
        <header className='bg-slate-200 sticky top-0 pb-7'>
             <nav className='w-[80%] mx-auto min-h-[80px] flex flex-col md:flex-row justify-between items-center  '>
            <h1 className='text-3xl font-bold text-green-500'>Live Long Go Long</h1>
            <ul className='items-container'>
                <Link to='/home'>Home</Link>
                <Link to='/checkout'>CheckOut</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/aboutme'>About me</Link>
                    {user ? <Link to='/login'onClick={handelSignOut} >Logout</Link>
                        :<Link to='/login'>Login</Link>}
                {user ? <Link to='/signup' className='invisible'>Sign Up</Link> :<Link to='/signup'>Sign Up</Link> }
             </ul>
        </nav>
       </header>
    );
};

export default Header;