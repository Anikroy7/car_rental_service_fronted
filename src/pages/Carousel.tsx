// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "../assets/css/Carousel.css"; // Import your custom CSS

export default function Carousel() {
  return (
    <>
      <Swiper
        className="mySwiper"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}    
          modules={[Autoplay, Pagination, Navigation]}
          >
        <SwiperSlide>
          <img src="https://www.acura.com/-/media/Acura-Platform/Vehicle-Pages/ZDX/2024/overview-page/01-hero/v2/Acura-2024-Overview-Hero_XL.jpg" alt="Car 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.acura.com/-/media/Acura-Platform/Vehicle-Pages/ZDX/2024/overview-page/05-360/Exterior/Large/Double-Apex-Blue-Pearl/Acura_2024_ZDX_EXT_360_DoubleApexBluePearl_0001.jpg" alt="Car 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.acura.com/-/media/Acura-Platform/Related-Vehicles-Pages/Future-Vehicles/EV-Education/Hero/Why-Go-Electric/Acura-2024-ZDX-EV-Education-Hero_XL.jpg" alt="Car 1" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
