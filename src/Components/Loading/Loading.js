import React from 'react';
import loading from '../../image/loading/Rolling-1s-200px.gif'
const Loading = () => {
    return (
        <div className='flex h-[100vh] w-full justify-center items-center'>
            <img src={loading} alt="" />
        </div>
    );
};

export default Loading;