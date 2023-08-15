import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
const MainBanner = () => {
  return (
    <BannerSwiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={150}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 2000 }}
      onSlideChange={() => console.log('slide change!')}
    >
      <BannerSwiperBox>내용이</BannerSwiperBox>
      <BannerSwiperBox>들어갑니다</BannerSwiperBox>
      <BannerSwiperBox>여기에뭐넣을지도</BannerSwiperBox>
      <BannerSwiperBox>정해야해요옹</BannerSwiperBox>
    </BannerSwiper>
  );
};

export default MainBanner;

const BannerSwiper = styled(Swiper)`
  width: 733px;
  height: 305px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.SKYBLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.3);
`;

const BannerSwiperBox = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;
