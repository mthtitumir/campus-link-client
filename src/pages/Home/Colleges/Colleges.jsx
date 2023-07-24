import React from 'react';
import Heading from '../../../components/Heading';
import useColleges from '../../../useHooks/useColleges';
import CollegeCard from '../../../components/CollegeCard';

const Colleges = () => {
    const [colleges] = useColleges();
    console.log(colleges);
    return (
        <div>
            <Heading />
            <div className='grid md:grid-cols-3 gap-2'>
                {
                    colleges.slice(0,3).map(college => <CollegeCard key={college._id} college={college} />)
                }
            </div>
        </div>
    );
};

export default Colleges;