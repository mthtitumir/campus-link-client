import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='mt-14 mb-5'>
            <div className='divider'></div>
            <h1 className='text-2xl font-semibold text-center'>{title}</h1>
            <p className='text-center'>{subtitle}</p>
            <div className='divider'></div>
        </div>
    );
};

export default Heading;