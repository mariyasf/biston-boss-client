import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            />
            <Swiper
                autoplay={{
                    delay: 2500,

                }}
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className=" my-24"
            >
                <SwiperSlide>
                    <img src="/home/slide1.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white '>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/home/slide2.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center
                     -mt-16 text-white '>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/home/slide3.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center 
                    -mt-16 text-white '>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/home/slide4.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center
                     -mt-16 text-white '>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/home/slide5.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center
                     -mt-16 text-white '>Desserts</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;