import React from 'react';
import Heading from '../../../components/Heading';
import { Link } from 'react-router-dom';

const ResearchPapers = () => {
    return (
        <div className=''>
            <Heading title="Research Papers" subtitle="Browse research papers of our colleges" />
            <div className='grid md:grid-cols-3 gap-3'>
                <Link to='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov'>
                    <div className="h-64 w-full card bg-base-100 shadow-xl image-full">
                        <figure><img src="https://media.nature.com/lw1024/magazine-assets/d41591-020-00026-w/d41591-020-00026-w_17836908.jpg" alt="Covid-19" /></figure>
                        <div className="flex justify-center items-center text-[orangered] z-10">
                            <div className='bg-black bg-opacity-50 p-5'>
                                <h2 className="card-title">Covid- 19</h2>
                                <p>Our Research on Covid-19</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='https://www.nature.com/subjects/plant-sciences'>
                    <div className="h-64 card w-full bg-base-100 shadow-xl image-full">
                        <figure><img src="https://foldscope.com/cdn/shop/articles/OBirdDUO1Mbq8UaGfi87f6weB9CE3QQW1658930572_2000x.jpg" alt="Plants" /></figure>
                        <div className="flex justify-center items-center text-[orangered] z-10">
                            <div className='bg-black bg-opacity-50 p-5'>
                                <h2 className="card-title">Plants</h2>
                                <p>Our Research on Plants</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="https://biomedpharmajournal.org/vol11no3/biomedical-waste-management-a-study-on-assessment-of-knowledge-attitude-and-practices-among-health-care-professionals-in-a-tertiary-care-teaching-hospital-2/">
                    <div className=" h-64 card w-full shadow-xl image-full">
                        <figure><img src="https://images.squarespace-cdn.com/content/v1/5bac99efb2cf79a76d80781d/07720c6a-8d15-4c71-9a75-479b8c3fcaee/Biomedical+Waste.png" alt="Biomedicine" /></figure>
                        <div className="flex justify-center items-center  text-[orangered] z-10">
                            <div className='bg-black bg-opacity-50 p-5'>
                                <h2 className="card-title">Biomedicine</h2>
                                <p>Our Research on Biomedical Waste Management</p>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default ResearchPapers;