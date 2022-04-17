import React from 'react';
import notfound from '../../image/notFound/404-notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <img  className='max-w-full h-[800px] mx-auto '  src={notfound} alt="" />
        </div>
    );
};

export default NotFound;