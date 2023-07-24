import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
    const { college_name, image, admission_dates, events, research_history, sports } = college;
    return (
        <div className="w-full bg-base-100 p-5 shadow-xl">
            <figure><img className='h-60 w-full' src={image} alt={college_name} /></figure>
            <div className="">
                <h2 className="card-title my-3 text-2xl">{college_name}</h2>
                <p className='font-medium my-2'><span className='text-[orangered]'>Admission Dates: </span>{admission_dates}</p>
                <p className='font-medium'><span className='text-[orangered]'>Research History: </span>{research_history}</p>
                <div className="divider"></div>
                <div className='flex font-medium'>
                    <div className='w-1/2'>
                        <p className='font-medium text-lg text-[orangered]'>Events</p>
                        <ul>
                            {
                                events.map(event => <li>- {event}</li>)
                            }
                        </ul>
                    </div>
                    <div className='w-1/2 '>
                        <p className='font-medium text-lg text-[orangered]'>Sports</p>
                        <ul>
                            {
                                sports.map(sport => <li>- {sport}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <Link to="#_" class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded group mt-3 w-full">
                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-white text-center">Details</span>
                </Link>
            </div>
        </div>
    );
};

export default CollegeCard;