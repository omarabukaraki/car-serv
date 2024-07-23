import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import img_1 from '../assets/img/carousel-bg-1.jpg';
import img_2 from '../assets/img/carousel-bg-2.jpg';

const TestOne = () => {
    const swiperRef = useRef(null);
    const imgAnimationRef = useRef(null);

    const slideNext = () => {
        if (swiperRef.current !== null) {
            swiperRef.current.slideNext();
        }
    };

    const slidePrev = () => {
        if (swiperRef.current !== null) {
            swiperRef.current.slidePrev();
        }
    };

    useEffect(() => {
        const animateImage = () => {
            if (imgAnimationRef.current) {
                imgAnimationRef.current.classList.add('animate-ping');
                setTimeout(() => {
                    imgAnimationRef.current.classList.remove('animate-ping');
                }, 1000); 
            }
        };

        const interval = setInterval(() => {
            slideNext();
            animateImage(); 
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full">
            <Swiper
                className='w-full'
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide>
                    <img src={img_1} alt="slide 1" className="w-full filter  blur-sm " />
                </SwiperSlide>
                <SwiperSlide>
                    <img ref={imgAnimationRef} src={img_2} alt="slide 2" className="w-full" />
                </SwiperSlide>
            </Swiper>

            <div className=" inset-0 flex items-center justify-center pointer-events-none">
                <button onClick={slidePrev} className="bg-gray-800 text-white px-4 py-2 rounded-md pointer-events-auto">Prev</button>
                <button onClick={slideNext} className="bg-gray-800 text-white px-4 py-2 rounded-md pointer-events-auto ml-4">Next</button>
            </div>
        </div>
    );
};

export default TestOne;
