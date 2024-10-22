import React, { useEffect, useRef } from "react";
import "./style.css";
import Swiper from "swiper";
import bioskop from "./../../assets/bioskop.jpg";
import { Link } from "react-router-dom";

const Carousel = ({ data }) => {
  useEffect(() => {
    console.log("data : ", data);

    new Swiper(".centered-slide-carousel", {
      centeredSlides: true,
      paginationClickable: true,
      loop: true,
      spaceBetween: 30,
      slideToClickedSlide: true,
      pagination: {
        el: ".centered-slide-carousel .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        990: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }, []);

  return (
    <div className="w-full relative">
      <div className="swiper centered-slide-carousel swiper-container relative">
        <div className="swiper-wrapper">
          {data.map((item, i) => (
            <div key={i} className="swiper-slide rounded-2xl overflow-hidden">
              <Link to={`/movie/${item.id}`} className="relative group">
                <div className="rounded-2xl overflow-hidden h-96 flex justify-center items-center relative">
                  <img
                    className="w-full h-full"
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt={item.title}
                  />
                  <div className="absolute">
                    <span className="text-3xl font-semibold text-indigo-600">
                      {item.title}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Carousel;
