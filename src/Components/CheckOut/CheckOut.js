import React from 'react';

const CheckOut = () => {
    return (
        <div>
            <h2 className='text-center text-green-400 mt-20 text-4xl italic font-bold'>Check Out Form</h2>

            <div className='w-1/2 mx-auto mt-6 border p-10 rounded-lg bg-green-500 text-white '>

                <form className=''>
                    <p className='mb-4'><label htmlFor="name" className='text-xl font-serif font-bold'>Your Full Name</label> <br />
                        <input placeholder='Please Enter Your Name'  type="text" name='name' className='pl-5 border mt-4 w-1/2 h-10 rounded-lg text-black' />
                    </p>
                    <p className='mb-4'><label htmlFor="phone" className='text-xl font-serif font-bold'>Phone Number</label> <br />
                        <input placeholder='Please Enter A valid Number' type="number" name='number' className='border text-black pl-5 mt-4 w-1/2 h-10 rounded-lg' />
                    </p>
                    <p className='mb-4'><label htmlFor="email" className='text-xl font-serif font-bold'>Email</label> <br />
                        <input type="email" name='email' placeholder='Please Enter Your Email'  className='border mt-4 pl-5 w-1/2 h-10 rounded-lg text-black' />
                    </p>
                    <p className='mb-4'><label htmlFor="package" className='text-xl font-serif font-bold'>Package</label> <br />
                        <input type="text" name='package' placeholder='Please Write The Service You Want To Take'  className='border text-black   mt-4 pl-5 w-1/2 h-10 rounded-lg' />
                    </p>
                    <button className='bg-green-900 px-8 py-2 ml-9 rounded-xl font-bold cursor-pointer mt-5'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;