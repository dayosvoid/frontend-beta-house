import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper core styles
import "swiper/css";
import "swiper/css/navigation";

import icon from '../assets/carousel/icon.png';

// 🌟 Accept the 'properties' array straight from the parent wrapper
const PopularProperties = ({ properties }) => {
  // Fallback check to avoid parsing empty structures
  if (!properties || properties.length === 0) return null;

  return (
    <div className="container mx-auto w-full my-16">
      <h2 className="font-semibold text-2xl md:text-4xl text-center mb-10">
        Discover Our Popular Properties
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="popular-swiper relative"
      >
        {/* 🌟 Map over the dynamic server properties array instead of static files */}
        {properties?.map((carousel) => (
          <SwiperSlide key={carousel._id || carousel.price}>
            <div className="relative overflow-hidden rounded-lg group">
              
              {/* Glassmorphism Text Overlay */}
              <div className="px-4 py-6 hidden lg:flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p className="text-lg font-semibold">{carousel.name || "Twin Duplex"}</p>
                <p className="text-green-400 font-bold mb-2">N {Number(carousel.price).toLocaleString()}</p>
                
                <div className="flex flex-row gap-3 text-[12px] font-light mb-2">
                  <small>{carousel.description?.bedRoom || 6} Bed</small>
                  <small>{carousel.description?.bathRoom || 3} Bath</small>
                  <small>720 sq ft</small>
                </div>
                
                <span className="flex items-center gap-2">
                  <img src={icon} alt="location marker" className="w-3 h-4" />
                  <p className="text-[12px] font-light text-nowrap">{carousel.location || "Victoria Island, Lagos"}</p>
                </span>
              </div>

              {/* Card Base Image */}
              <div className="w-full h-[250px] md:h-[320px]">
                <img
                  src={carousel.image || carousel.img}
                  alt="Popular real estate layout"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularProperties;