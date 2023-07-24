import React from 'react';
import banner from '../../../assets/banner/classroom.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <div className=''>
                <img className='h-screen w-full object-cover ' src={banner} alt="" />
            </div>
            <div className=' bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center'>
                <div>
                    <h1 className='text-orange-600 text-center text-5xl font-bold'>Campus Link</h1>
                    <h1 className='text-xl text-white mt-5'>Discover Unleashing Knowledge, Creativity, and Community</h1>
                    <div className='flex justify-center items-center mt-5 gap-5'>
                        <a href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative text-white">Learn More</span>
                            </span>
                        </a>
                        <a href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                            <span className="w-full h-full bg-gradient-to-br from-[#ff00c6] via-[#ff5478] to-[#ff8a05] group-hover:from-[#ff8a05] group-hover:via-[#ff5478] group-hover:to-[#ff00c6] absolute"></span>
                            <span className="relative px-6 py-3 transition-all ease-out hover:bg-gray-900 rounded-md  duration-400">
                                <span className="relative text-white">Admission</span>
                            </span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;