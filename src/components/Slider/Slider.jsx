import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

function Slider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const currentRef = swiperRef.current;

    const handleWheel = (e) => {
      currentRef.scrollTop += e.deltaY;
    };

    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="slider" ref={swiperRef}>
      <Swiper
        direction="vertical"
        loop={true}
        slidesPerView={5}
        className="mySwiper"
        mousewheel={{
          invert: false,
        }}
      >
        <SwiperSlide>
          <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
          <span>10.01.2024</span>
        </SwiperSlide>
        <SwiperSlide>
          <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
          <span>10.01.2024</span>
        </SwiperSlide>
        <SwiperSlide>
          <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
          <span>10.01.2024</span>
        </SwiperSlide>
        <SwiperSlide>
          <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
          <span>10.01.2024</span>
        </SwiperSlide>
        <SwiperSlide>
          <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
          <span>10.01.2024</span>
        </SwiperSlide>
        <SwiperSlide>
          <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
          <span>10.01.2024</span>
        </SwiperSlide>
        <SwiperSlide>
          <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
          <span>10.01.2024</span>
        </SwiperSlide>
        <SwiperSlide>
          <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
          <span>10.01.2024</span>
        </SwiperSlide>
        <SwiperSlide>
          <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
          <span>10.01.2024</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
