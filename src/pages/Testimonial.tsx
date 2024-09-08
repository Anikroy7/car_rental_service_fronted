import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

export default function Testimonial() {
  return (
    <>
    <h2 className='text-center font-bold text-5xl text-gray-600 mt-40'>Testimonial</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
            <div className="-ml-4">
              <svg className="w-8 opacity-25 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0
                                                                                                             640 640"
                fill={'currentColor'}>
                <path
                  d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
              </svg>
            </div>
            <div className="mt-2">
              I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones,
              crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My
              brain was tired
            </div>
            <div>
              <div className="mx-auto w-full border border-gray-300 my-8"></div>
              <div className="flex items-center">
                <div>
                  <img style={{width:'60px', height:"60px"}} className="w-12 h-12 rounded-full border-2 border-indigo-400"
                    src="https://avatars2.githubusercontent.com/u/2741?s=64&v=4"/>
                </div>
                <div className="ml-4">
                  <div className="font-bold">David H. Hansson</div>
                  <div className="text-sm text-gray-600 mt-1">CTO, <a href="https://timerse.com/7-steps-to-boost-your-metabolism/">Boosting Metabolism</a></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
            <div className="-ml-4">
              <svg className="w-8 opacity-25 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0
                                                                                                             640 640"
                fill={'currentColor'}>
                <path
                  d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
              </svg>
            </div>
            <div className="mt-2">
              I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones,
              crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My
              brain was tired
            </div>
            <div>
              <div className="mx-auto w-full border border-gray-300 my-8"></div>
              <div className="flex items-center">
                <div>
                  <img style={{width:'60px', height:"60px"}} className="w-12 h-12 rounded-full border-2 border-indigo-400"
                    src="https://avatars2.githubusercontent.com/u/2741?s=64&v=4"/>
                </div>
                <div className="ml-4">
                  <div className="font-bold">David H. Hansson</div>
                  <div className="text-sm text-gray-600 mt-1">CTO, <a href="https://timerse.com/7-steps-to-boost-your-metabolism/">Boosting Metabolism</a></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
            <div className="-ml-4">
              <svg className="w-8 opacity-25 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0
                                                                                                             640 640"
                fill={'currentColor'}>
                <path
                  d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
              </svg>
            </div>
            <div className="mt-2">
              I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones,
              crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My
              brain was tired
            </div>
            <div>
              <div className="mx-auto w-full border border-gray-300 my-8"></div>
              <div className="flex items-center">
                <div>
                  <img style={{width:'60px', height:"60px"}} className="w-12 h-12 rounded-full border-2 border-indigo-400"
                    src="https://avatars2.githubusercontent.com/u/2741?s=64&v=4"/>
                </div>
                <div className="ml-4">
                  <div className="font-bold">David H. Hansson</div>
                  <div className="text-sm text-gray-600 mt-1">CTO, <a href="https://timerse.com/7-steps-to-boost-your-metabolism/">Boosting Metabolism</a></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
            <div className="-ml-4">
              <svg className="w-8 opacity-25 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0
                                                                                                             640 640"
                fill={'currentColor'}>
                <path
                  d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
              </svg>
            </div>
            <div className="mt-2">
              I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones,
              crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My
              brain was tired
            </div>
            <div>
              <div className="mx-auto w-full border border-gray-300 my-8"></div>
              <div className="flex items-center">
                <div>
                  <img style={{width:'60px', height:"60px"}} className="w-12 h-12 rounded-full border-2 border-indigo-400"
                    src="https://avatars2.githubusercontent.com/u/2741?s=64&v=4"/>
                </div>
                <div className="ml-4">
                  <div className="font-bold">David H. Hansson</div>
                  <div className="text-sm text-gray-600 mt-1">CTO, <a href="https://timerse.com/7-steps-to-boost-your-metabolism/">Boosting Metabolism</a></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
            <div className="-ml-4">
              <svg className="w-8 opacity-25 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0
                                                                                                             640 640"
                fill={'currentColor'}>
                <path
                  d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
              </svg>
            </div>
            <div className="mt-2">
              I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones,
              crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My
              brain was tired
            </div>
            <div>
              <div className="mx-auto w-full border border-gray-300 my-8"></div>
              <div className="flex items-center">
                <div>
                  <img style={{width:'60px', height:"60px"}} className="w-12 h-12 rounded-full border-2 border-indigo-400"
                    src="https://avatars2.githubusercontent.com/u/2741?s=64&v=4"/>
                </div>
                <div className="ml-4">
                  <div className="font-bold">David H. Hansson</div>
                  <div className="text-sm text-gray-600 mt-1">CTO, <a href="https://timerse.com/7-steps-to-boost-your-metabolism/">Boosting Metabolism</a></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
            <div className="-ml-4">
              <svg className="w-8 opacity-25 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0
                                                                                                             640 640"
                fill={'currentColor'}>
                <path
                  d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
              </svg>
            </div>
            <div className="mt-2">
              I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones,
              crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My
              brain was tired
            </div>
            <div>
              <div className="mx-auto w-full border border-gray-300 my-8"></div>
              <div className="flex items-center">
                <div>
                  <img style={{width:'60px', height:"60px"}} className="w-12 h-12 rounded-full border-2 border-indigo-400"
                    src="https://avatars2.githubusercontent.com/u/2741?s=64&v=4"/>
                </div>
                <div className="ml-4">
                  <div className="font-bold">David H. Hansson</div>
                  <div className="text-sm text-gray-600 mt-1">CTO, <a href="https://timerse.com/7-steps-to-boost-your-metabolism/">Boosting Metabolism</a></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
            <div className="-ml-4">
              <svg className="w-8 opacity-25 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0
                                                                                                             640 640"
                fill={'currentColor'}>
                <path
                  d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
              </svg>
            </div>
            <div className="mt-2">
              I felt disorganized. Pieces of paper everywhere. I was constantly making new lists, losing old ones,
              crossing off items and adding new ones. I was forever worried things were slipping and not getting done. My
              brain was tired
            </div>
            <div>
              <div className="mx-auto w-full border border-gray-300 my-8"></div>
              <div className="flex items-center">
                <div>
                  <img style={{width:'60px', height:"60px"}} className="w-12 h-12 rounded-full border-2 border-indigo-400"
                    src="https://avatars2.githubusercontent.com/u/2741?s=64&v=4"/>
                </div>
                <div className="ml-4">
                  <div className="font-bold">David H. Hansson</div>
                  <div className="text-sm text-gray-600 mt-1">CTO, <a href="https://timerse.com/7-steps-to-boost-your-metabolism/">Boosting Metabolism</a></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
