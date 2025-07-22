import Image1 from "../../assets/Images/banner1.png";
import Image2 from "../../assets/Images/banner2.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSection = () => {
  return (
    <div>
        <div className="flex items-center  z-10 absolute left-0 top-0 opacity-90 h-screen w-screen inset-0 bg-gradient-to-r from-[#2E3192] from-12% via-[#6C67A3] via-[35%] " >
          <div className=" mx-auto w-11/12" >
            <div className="w-1/2 flex flex-col justify-center gap-7 " >
              <h1 className=" text-white text-6xl font-bold" >
                Your Search For a <span className="text-5xl" >Property ends here</span>
              </h1>
              <p className="text-white text-xl  " >Explore our curated selection of exquisite properties tailored to your unique dreams.</p>
            </div>
          </div>
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