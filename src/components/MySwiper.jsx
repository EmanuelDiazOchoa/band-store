import "./MySwiper.css";
import "./swiper-gl.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import SwiperGL from "./swiper-gl.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./swiper-gl.css";
import "./MySwiper.css";

export default function MySwiper() {
  const swiperParameters = {
    modules: [A11y, Autoplay, Navigation, SwiperGL],
    effect: "gl",
    speed: 1500,
    navigation: { enabled: true },
    autoplay: { enabled: true, delay: 500 },
    breakpoints: { 768: {}, 1280: {}, 1920: {} },
  };
  return (
    <>
      <Swiper {...swiperParameters}>
        <SwiperSlide className="swiper-slide-5215">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-bdb6 swiper-gl-image"
            src="../../public/img/1Floyd.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              Pink Floyd 
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-5215">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-bdb6 swiper-gl-image"
            src="../../public/img/2Roses.webp"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              Guns n´ Roses
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-5215">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-bdb6 swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/03.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              Red Hot Chilli Peppers
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-5215">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-bdb6 swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/04.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              Black Sabbath 
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-5215">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-bdb6 swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/05.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              The Beatles
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-5215">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-bdb6 swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/06.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              Led Zeppelin
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-5215">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-bdb6 swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/07.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              R.E.M
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-5215">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-bdb6 swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/08.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              AC/DC
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-5215">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-bdb6 swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/09.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              Rammstein
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-5215">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-bdb6 swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/10.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-66a3">
              Rolling Stone
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
