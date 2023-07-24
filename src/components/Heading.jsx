import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='my-14'>
            <div className='divider'></div>
            <h1 className='text-3xl uppercase text-[orangered] font-semibold text-center'>{title}</h1>
            <p className='text-center font-medium capitalize'>{subtitle}</p>
            <div className='divider'></div>
        </div>
    );
};

export default Heading;