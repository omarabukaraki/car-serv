import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img_1 from "../../assets/img/carousel-bg-1.jpg";
import img_2 from "../../assets/img/carousel-bg-2.jpg";
import car_1 from "../../assets/img/carousel-1.png";
import car_2 from "../../assets/img/carousel-2.png";
import { SwapperComponent } from "../../components/index";


const Slider = () => {
        const swiperRef = useRef(null);

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
          const interval = setInterval(() => {
            slideNext();
          }, 7000);
          return () => clearInterval(interval);
        }, []);
      
  return (
        <div className="w-full">
        <Swiper className='w-full'
             spaceBetween={0}
             slidesPerView={1}
             loop={true}
             speed={1500}
             onSlideChange={() => {}}
             onSwiper={(swiper) => (swiperRef.current = swiper)}
         >
            <SwiperSlide >
                 <SwapperComponent prevClick={slidePrev} nextClick={slideNext} bg_image={img_1} image={car_1} />
                </SwiperSlide>
                <SwiperSlide>
                 <SwapperComponent prevClick={slidePrev} nextClick={slideNext} bg_image={img_2} image={car_2}/>
                </SwiperSlide>
         </Swiper>
     </div>
     
  )
}

export default Slider
