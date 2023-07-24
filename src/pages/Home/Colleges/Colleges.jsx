import React from 'react';
import Heading from '../../../components/Heading';
import useColleges from '../../../useHooks/useColleges';
import CollegeCard from './CollegeCard';

const Colleges = () => {
    const [colleges] = useColleges();
    // console.log(colleges);
    return (
        <div>
            <Heading title="Renowned Colleges" subtitle="World's top ranked colleges" />
            <div className='grid md:grid-cols-3 gap-2'>
                {
                    colleges.slice(0,3).map(college => <CollegeCard key={college._id} college={college} />)
                }
            </div>
        </div>
    );
};

export default Colleges;