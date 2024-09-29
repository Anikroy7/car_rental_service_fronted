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
          <div className="flex flex-col md:flex-row h-[90vh]">
            {/* Left Section with Text */}
            <div className="flex-[30%] bg-stone-600 flex justify-center">
              <div className="text-center text-white mt-44">
                <h1 className="text-4xl font-bold text-white">Drive the Future</h1>
                <p className="my-4">Book your next ride with the latest electric vehicles.</p>
                <a href="#" className="btn btn-wide bg-black border-none text-white hover:bg-gray-900">
                  Book Now
                </a>
              </div>
            </div>

            {/* Right Section with Car Image */}
            <div className="flex-[70%] bg-cover bg-center" style={{ backgroundImage: `url('https://www.acura.com/-/media/Acura-Platform/Vehicle-Pages/ZDX/2024/overview-page/01-hero/v2/Acura-2024-Overview-Hero_XL.jpg')` }}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row h-[90vh]">
            {/* Left Section with Text */}
            <div className="flex-[30%] bg-stone-600 flex justify-center">
              <div className="text-center text-white mt-44">
                <h1 className="text-4xl font-bold text-white">Drive the Future</h1>
                <p className="my-4">Book your next ride with the latest electric vehicles.</p>
                <a href="#" className="btn btn-wide bg-black border-none text-white hover:bg-gray-900">
                  Book Now
                </a>
              </div>
            </div>

            {/* Right Section with Car Image */}
            <div className="flex-[70%] bg-cover bg-center" style={{ backgroundImage: `url('https://www.acura.com/-/media/Acura-Platform/Vehicle-Pages/ZDX/2024/overview-page/05-360/Exterior/Large/Double-Apex-Blue-Pearl/Acura_2024_ZDX_EXT_360_DoubleApexBluePearl_0001.jpg')` }}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row h-[90vh]">
            {/* Left Section with Text */}
            <div className="flex-[30%] bg-stone-600 flex justify-center">
              <div className="text-center text-white mt-44">
                <h1 className="text-4xl font-bold text-white">Drive the Future</h1>
                <p className="my-4">Book your next ride with the latest electric vehicles.</p>
                <a href="#" className="btn btn-wide bg-black border-none text-white hover:bg-gray-900">
                  Book Now
                </a>
              </div>
            </div>

            {/* Right Section with Car Image */}
            <div className="flex-[70%] bg-cover bg-center" style={{ backgroundImage: `url('https://www.acura.com/-/media/Acura-Platform/Related-Vehicles-Pages/Future-Vehicles/EV-Education/Hero/Why-Go-Electric/Acura-2024-ZDX-EV-Education-Hero_XL.jpg')` }}></div>
          </div>
        </SwiperSlide>


        {/*   <SwiperSlide>
          <div className="relative">
            <img
              src="https://www.acura.com/-/media/Acura-Platform/Vehicle-Pages/ZDX/2024/overview-page/01-hero/v2/Acura-2024-Overview-Hero_XL.jpg"
              alt="Car 1"
              className="w-full"
            />
            <button className="absolute bottom-[-30] left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
              Book Now
            </button>
          </div>
        </SwiperSlide> */}

        {/*      <SwiperSlide>
          <div className="relative">
            <img
              src="https://www.acura.com/-/media/Acura-Platform/Vehicle-Pages/ZDX/2024/overview-page/05-360/Exterior/Large/Double-Apex-Blue-Pearl/Acura_2024_ZDX_EXT_360_DoubleApexBluePearl_0001.jpg"
              alt="Car 1"
              className="w-full"
            />
            <button className="absolute bottom-[-30] left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
              Book Now
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://www.acura.com/-/media/Acura-Platform/Related-Vehicles-Pages/Future-Vehicles/EV-Education/Hero/Why-Go-Electric/Acura-2024-ZDX-EV-Education-Hero_XL.jpg"
              alt="Car 1"
              className="w-full"
            />
            <button className="absolute bottom-[-30] left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
              Book Now
            </button>
          </div>
        </SwiperSlide>
 */}

      </Swiper>
    </>
  );
}
