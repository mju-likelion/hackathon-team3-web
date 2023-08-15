import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import BannerContentImg from '../../assets/images/Banner2.svg';
import Announce from '../../assets/images/Announcement.svg';
import LastBanner from '../../assets/images/lastbanner.svg';
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
      <BannerSwiperBox>
        <BannerContent src={BannerContentImg} />
      </BannerSwiperBox>
      <BannerSwiperBox>
        <BannerContent src={Announce} />
      </BannerSwiperBox>
      <BannerSwiperBox>
        <BannerContent src={LastBanner} />
      </BannerSwiperBox>
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

const BannerContent = styled.img`
  width: 100%;
`;
