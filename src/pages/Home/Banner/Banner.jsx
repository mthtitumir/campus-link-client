import React from 'react';
import banner from '../../../assets/banner/classroom.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <div className=''>
                <img className='h-screen w-full object-cover ' src={banner} alt="" />
            </div>
            <div className=' bg-sky-600 bg-opacity-50 absolute inset-0 flex justify-center items-center'>
                <div>
                    <h1 className='text-3xl text-white'>hello</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;