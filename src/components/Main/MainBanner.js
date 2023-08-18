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
    >
      <BannerSwiperBox>
        <BannerContentTitle>
          정보 검색 교육 서비스
          <BannerImportant>써핑</BannerImportant>
        </BannerContentTitle>
        <BannerContentText>
          게임을 통한 정보 검색 교육 기능을 통해
        </BannerContentText>
        <BannerContentText>
          원하는 정보를 검색하는데 겪는 어려움과 불편함을 해소
        </BannerContentText>
      </BannerSwiperBox>
      <BannerSwiperBox>
        <BannerContentTitle>공지사항</BannerContentTitle>
        <BannerContentText>
          이제 기초학습 이외에도 구글링 연습을 할 수 있는
        </BannerContentText>
        <BannerContentText>‘심화학습’ 기능이 추가되었습니다!</BannerContentText>
      </BannerSwiperBox>
      <BannerSwiperBox>
        <BannerContentThird>검색 교육을 통해 검색 능력을</BannerContentThird>
        <BannerContentThird>향상시켜 보세요!</BannerContentThird>
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
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.3);
`;
const BannerSwiperBox = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const BannerContentTitle = styled.p`
  font-size: 35px;
  font-weight: bold;
  color: white;
  text-shadow:
    1px 1px 1px rgb(0, 0, 0, 0.3),
    -1px -1px 1px rgb(0, 0, 0, 0.3),
    1px -1px 1px rgb(0, 0, 0, 0.3),
    -1px 1px 1px rgb(0, 0, 0, 0.3);
  margin-bottom: 20px;
  margin-top: -20px;
`;
const BannerContentText = styled.p`
  margin-top: 15px;
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;
const BannerImportant = styled.span`
  margin-left: 13px;
  font-size: 50px;
  color: white;
  text-shadow:
    1px 1px 1px rgb(0, 0, 0, 0.3),
    -1px -1px 1px rgb(0, 0, 0, 0.3),
    1px -1px 1px rgb(0, 0, 0, 0.3),
    -1px 1px 1px rgb(0, 0, 0, 0.3);
`;
const BannerContentThird = styled.p`
  margin-top: 15px;
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;
