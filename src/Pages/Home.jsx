import React from 'react'
import Image1 from ""
import Image2 from ""
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';   

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <div>
        <Swiper
            loop={true}
            slidesPerView={1}
                spaceBetween={25}
                modules={[Pagination, Autoplay, Navigation]}
                pagination={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            breakpoints={{
                  1024:{slidesPerView:3}
            }}
        >
            <SwiperSlide>
                <img src={Image1} alt="Banner 1" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image2} alt="Banner 2" className="w-full h-auto" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Home