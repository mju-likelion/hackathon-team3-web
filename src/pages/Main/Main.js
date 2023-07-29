import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <MainBox>
        <MainBanner>
          서비스 소개, 공지사항, 도움말, ... 대회소개 등 배너 내용 들어갈 예정!
        </MainBanner>
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
  background-color: #ffc5da;
  display: flex;
  justify-content: center;
  align-items: center;
`;
