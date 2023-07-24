import React from 'react';
import Banner from '../Banner/Banner';
import Colleges from '../Colleges/Colleges';
import Gallery from '../Gallery/Gallery';
import ResearchPapers from '../ResearchPapers/ResearchPapers';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='container mx-auto'>
                <Colleges />
                <Gallery />
                <ResearchPapers />
                <Reviews />
            </div>
        </div>
    );
};

export default Home;