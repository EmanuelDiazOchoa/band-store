import "./MySwiper.css";
import "./swiper-gl.css";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function MySwiper() {
  const [swiperModules, setSwiperModules] = useState([A11y, Autoplay, Navigation]);


  useEffect(() => {
    import("../lib/swiper-gl.esm.js").then((module) => {
      setSwiperModules((mods) => [...mods, module.default]);
    });
  }, []);

  const swiperParameters = {
    modules: swiperModules,
    effect: "gl",
    speed: 1500,
    navigation: { enabled: true },
    autoplay: { enabled: true, delay: 500 },
    breakpoints: {
      768: {},
      1280: {},
      1920: {},
    },
  };

  return (
    <Swiper {...swiperParameters}>
      <SwiperSlide className="swiper-slide-5215">
        <img
          className="swiper-slide-bg-image swiper-gl-image"
          src="/img/1Floyd.jpg"
        />
        <div className="swiper-slide-content">
          <div className="swiper-slide-text">Pink Floyd</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide-5215">
        <img
          className="swiper-slide-bg-image swiper-gl-image"
          src="/img/2Roses.webp"
        />
        <div className="swiper-slide-content">
          <div className="swiper-slide-text">Guns n Roses</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide-5215">
        <img
          className="swiper-slide-bg-image swiper-gl-image"
          src="/img/3Peppers.png"
        />
        <div className="swiper-slide-content">
          <div className="swiper-slide-text">Red Hot Chilli Peppers</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide-5215">
        <img
          className="swiper-slide-bg-image swiper-gl-image"
          src="/img/4Sabbath.jpg"
        />
        <div className="swiper-slide-content">
          <div className="swiper-slide-text">Black Sabbath</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide-5215">
        <img
          className="swiper-slide-bg-image swiper-gl-image"
          src="/img/5Beatles.jpg"
        />
        <div className="swiper-slide-content">
          <div className="swiper-slide-text">The Beatles</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide-5215">
        <img
          className="swiper-slide-bg-image swiper-gl-image"
          src="/img/6Zeppelin.jpg"
        />
        <div className="swiper-slide-content">
          <div className="swiper-slide-text">Led Zeppelin</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide-5215">
        <img
          className="swiper-slide-bg-image swiper-gl-image"
          src="/img/7Rem.jpeg"
        />
        <div className="swiper-slide-content">
          <div className="swiper-slide-text">R.E.M</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide-5215">
        <img
          className="swiper-slide-bg-image swiper-gl-image"
          src="/img/8Acdc.webp"
        />
        <div className="swiper-slide-content">
          <div className="swiper-slide-text">AC/DC</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide-5215">
        <img
          className="swiper-slide-bg-image swiper-gl-image"
          src="/img/9Rammstein.jpg"
        />
        <div className="swiper-slide-content">
          <div className="swiper-slide-text">Rammstein</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide-5215">
        <img
          className="swiper-slide-bg-image swiper-gl-image"
          src="/img/10Stone.jpg"
        />
        <div className="swiper-slide-content">
          <div className="swiper-slide-text">Rolling Stone</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
