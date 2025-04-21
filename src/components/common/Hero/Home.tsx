"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";

const HeroHome = () => {
  return (
    <div className="relative mt-20">
      <div className="flex absolute -bottom-5 left-0 w-full z-10 h-12">
        <div className=""></div>
      </div>

      <Swiper
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        autoplay={{
          delay: 3000, // Tempo em milissegundos entre os slides
          disableOnInteraction: false, // Continua o autoplay mesmo após interação
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative">
              <div className="hidden md:block">
                <img
                  src="https://placehold.co/1920x700"
                  width={1920}
                  height={700}
                  alt="Banner desktop"
                  className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                />
              </div>
              <div className="md:hidden h-96">
                <img
                  width={1920}
                  height={700}
                  src="https://placehold.co/1920x700"
                  alt="Banner mobile"
                  className="relative object-cover h-full w-full"
                />
              </div>
              <section className="absolute w-full h-full flex flex-col justify-center place-content-center inset-0 bg-black/50">
                <div className="row">
                  <div className="container">
                    <h1
                      className={`font-black text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-white text-center ${
                        isActive && "animate-fade-down"
                      }`}
                    >
                      Lorem
                    </h1>
                  </div>
                </div>
              </section>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative">
              <div className="hidden md:block">
                <img
                  src="https://placehold.co/1920x700"
                  width={1920}
                  height={700}
                  alt="Banner desktop"
                  className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                />
              </div>
              <div className="md:hidden h-96">
                <img
                  width={1920}
                  height={700}
                  src="https://placehold.co/1920x700"
                  alt="Banner mobile"
                  className="relative object-cover h-full w-full"
                />
              </div>
              <section className="absolute w-full h-full flex flex-col justify-center place-content-center inset-0 bg-black/50">
                <div className="row">
                  <div className="container">
                    <h1
                      className={`font-black text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-white text-center ${
                        isActive && "animate-fade-down"
                      }`}
                    >
                      Lorem
                    </h1>
                  </div>
                </div>
              </section>
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroHome;
