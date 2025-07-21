import Image1 from "../assets/Images/banner1.png";
import Image2 from "../assets/Images/banner2.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSection = () => {
  return (
    <div>
        <div className=" z-10 absolute left-0 top-0 opacity-90 h-screen w-screen inset-0 bg-gradient-to-r from-[#2E3192] from-12% via-[#6C67A3] via-[35%] " >
          <h1>
            Your Search For a Property ends here
          </h1>
        </div>
        <Swiper
                speed={1000}
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
              >
                <SwiperSlide>
                  <img
                    src={Image1}
                    alt="Banner 1"
                    className=" w-screen h-screen object-cover "
                  />
                </SwiperSlide>
                <SwiperSlide className="w-[100%]">
                  <img
                    src={Image2}
                    alt="Banner 2"
                    className="w-screen h-screen object-cover"
                  />
                </SwiperSlide>
              </Swiper>
    </div>
  )
}

export default HeroSection