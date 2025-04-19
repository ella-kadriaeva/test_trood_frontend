import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Card from "./Card";

export default function SwiperBlock({ projects }) {
  const preparedProjects =
    projects.length < 2
      ? [...projects, ...Array(2 - projects.length).fill(null)]
      : projects;

  return (
    <div className="swiper__wrapper">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {preparedProjects.map((item, index) => (
          <SwiperSlide key={item?.id || `placeholder-${index}`}>
            {item ? (
              <Card item={item} />
            ) : (
              <div
                style={{
                  visibility: "hidden",
                  height: 0
                }}
              ></div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
