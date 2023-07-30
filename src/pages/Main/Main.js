import React from 'react';
import styled from 'styled-components';
import RightArrow from '../../assets/images/RightArrow.svg';
import LeftArrow from '../../assets/images/LeftArrow.svg';

const Main = () => {
  return (
    <>
      <MainBox>
        <PrevBtn src={LeftArrow} />
        <MainBanner>
          서비스 소개, 공지사항, 도움말, ... 대회소개 등 배너 내용 들어갈 예정!
        </MainBanner>
        <NextBtn src={RightArrow} />
      </MainBox>
    </>
  );
};

export default Main;

const MainBox = styled.div`
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
