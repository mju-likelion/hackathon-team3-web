import React from 'react';
import styled from 'styled-components';
import RightArrow from '../../assets/images/RightArrow.svg';
import LeftArrow from '../../assets/images/LeftArrow.svg';

const Main = () => {
  return (
    <>
      <BannerBox>
        <PrevBtn src={LeftArrow} />
        <MainBanner>
          서비스 소개, 공지사항, 도움말, ... 대회소개 등 배너 내용 들어갈 예정!
        </MainBanner>
        <NextBtn src={RightArrow} />
      </BannerBox>
      <FunctionBox>
        <EduBtn>학습</EduBtn>
        <MyPageBtn>마이페이지</MyPageBtn>
      </FunctionBox>
    </>
  );
};

export default Main;

const BannerBox = styled.div`
  margin-top: 143px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBanner = styled.div`
  width: 733px;
  height: 305px;
  border-radius: 20px;
  background-color: #badeff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.3);
`;

const PrevBtn = styled.img`
  margin-right: 27px;
`;

const NextBtn = styled.img`
  margin-left: 27px;
`;

const FunctionBox = styled.div`
  margin-top: 66px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

// 아이콘 확정하기 전 임시
const EduBtn = styled.div`
  width: 127px;
  height: 132px;
  background-color: green;
`;

const MyPageBtn = styled.div`
  width: 127px;
  height: 132px;
  background-color: pink;
  margin-left: 133px;
`;
