import React from 'react';
import useColleges from '../../useHooks/useColleges';
import CollegeCard from '../Home/Colleges/CollegeCard';

const Colleges = () => {
    const [colleges] = useColleges();
    return (
        <div className='grid md:grid-cols-3 gap-2'>
            {
                colleges.map(college => <CollegeCard key={college._id} college={college} />)
            }
            
        </div>
    );
};

export default Colleges;