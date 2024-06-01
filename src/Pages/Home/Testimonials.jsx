
import { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <div className='my-20'>
            <SectionTitle
                subHeading={"What our Client Says"}
                heading={"Testimonials"}
            />

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className='my-20 space-y-5 mx-24 flex flex-col items-center text-center' >
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <p className='text-2xl text-[#D99904]'>
                                    {review.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    )
                }


            </Swiper>
        </div>
    );
};

export default Testimonials;