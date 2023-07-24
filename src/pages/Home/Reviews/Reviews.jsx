import React from 'react';
import Heading from '../../../components/Heading';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from "swiper/modules";
// import { Rating } from '@smastrom/react-rating';
// import '@smastrom/react-rating/style.css'
import useReviews from '../../../useHooks/useReviews';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs"


const Reviews = () => {
    const [reviews] = useReviews();
    // console.log(reviews);

    return (
        <div>
            <Heading title="Reviews & Feedbacks" subtitle="see what students & guardians say about us" />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>

                        <div className='flex flex-col items-center m-16'>
                            <figure className='mb-2'>
                                <img className='h-16 rounded-full' src="https://i.ibb.co/BqDXqHd/Titumir-1.jpg" alt="" />
                            </figure>
                            <p className='mb-2 text-xl font-semibold'>{review.guardian_name} <span className='font-semibold text-base'>about</span> {review.college_name}</p>
                            <Rating
                                placeholderRating={review.rating}
                                emptySymbol={<AiOutlineStar className='text-2xl text-orange-600'/>}
                                placeholderSymbol={<AiFillStar className='text-2xl text-orange-600'/>}
                                fullSymbol={<AiFillStar />}
                            />
                            <p>{review.details}</p>
                            <h3 className="text-2xl text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;