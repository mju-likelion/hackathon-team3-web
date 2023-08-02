import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import styled from 'styled-components';
import SwiperCore from 'swiper';

const MainBanner = () => {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <BannerSwiper
      spaceBetween={50}
      scrollbar={{ draggable: true }}
      navigation
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{
        delay: 2500,
      }}
      onSlideChange={() => console.log('slide change!')}
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
    </BannerSwiper>
  );
};

export default MainBanner;

const BannerSwiper = styled(Swiper)`
  width: 733px;
  height: 305px;
  border-radius: 20px;
  background-color: #badeff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.3);
`;
