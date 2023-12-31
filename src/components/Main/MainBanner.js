import styled from 'styled-components';
import Carousel from 'nuka-carousel';
const renderCenterLeftControls = ({ previousSlide }) => (
  <PreviousButton onClick={previousSlide}>&#60;</PreviousButton>
);
const renderCenterRightControls = ({ nextSlide }) => (
  <NextButton onClick={nextSlide}>&#62;</NextButton>
);

const MainBanner = () => {
  return (
    <BannerBox>
      <StyledCarousel
        autoplay={true}
        autoplayInterval={2000}
        withoutControls={false}
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls}
        defaultControlsConfig={{
          pagingDotsStyle: {
            padding: '1px',
          },
        }}
        wrapAround
      >
        <BannerCarouselBox>
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
        </BannerCarouselBox>
        <BannerCarouselBox>
          <BannerContentTitle>공지사항</BannerContentTitle>
          <BannerContentText>
            이제 기초학습 이외에도 구글링 연습을 할 수 있는
          </BannerContentText>
          <BannerContentText>
            ‘심화학습’ 기능이 추가되었습니다!
          </BannerContentText>
        </BannerCarouselBox>
        <BannerCarouselBox>
          <BannerContentThird>검색 교육을 통해 검색 능력을</BannerContentThird>
          <BannerContentThird>향상시켜 보세요!</BannerContentThird>
        </BannerCarouselBox>
      </StyledCarousel>
    </BannerBox>
  );
};

export default MainBanner;

const BannerBox = styled.div`
  width: 733px;
`;

const StyledCarousel = styled(Carousel)`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.SKYBLUE};
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.3);
`;

const BannerCarouselBox = styled.div`
  height: 305px;
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

const PreviousButton = styled.button`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-left: 10px;
`;

const NextButton = styled.button`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-right: 10px;
`;
