import React from 'react';
import MyPageCategory from './MyPageCategory';
import styled from 'styled-components';
import ProgressRateBar from '../../components/ProgressRateBar';
import ButtonLong from '../../components/ButtonLong';

const MyPage = () => {
  return (
    <>
      <MyPageBox>
        <MyPageCategory />
        <MyPageEdu>
          <MyPageEduTitle>[username]님의 학습현황</MyPageEduTitle>
          <BlackHr />
          <BasicEduTitle>기초학습</BasicEduTitle>
          <EduBundle>
            <ProgressiveRate className='ratebar' />
            <EduBtn>이어서 학습하기 ></EduBtn>
          </EduBundle>
          <GrayHr />
          <BasicEduTitle>심화학습</BasicEduTitle>
          <EduBundle>
            <ProgressiveRate className='ratebar' />
            <EduBtn>이어서 학습하기 ></EduBtn>
          </EduBundle>
        </MyPageEdu>
      </MyPageBox>
    </>
  );
};

export default MyPage;

const MyPageBox = styled.div`
  display: flex;
`;

const MyPageEdu = styled.div`
  display: flex;
  width: 1052px;
  background-color: green;
  flex-direction: column;
`;

const MyPageEduTitle = styled.h2`
  font-size: 25px;
  font-weight: 500;
  margin: 17px 0 13px 20px;
`;

const BlackHr = styled.hr`
  width: 988px;
  margin-left: 20px;
  border: 1px solid;
`;

const BasicEduTitle = styled.h3`
  font-size: 26px;
  margin: 40px 0 0 38px;
`;

const EduBundle = styled.div`
  display: flex;
  padding: 49px 0 37px 40px;
  //background-color: gold;
  align-items: center;
`;

const ProgressiveRate = styled(ProgressRateBar)`
  //margin: 49px 0 37px 40px;
`;

const EduBtn = styled.div`
  width: 167px;
  height: 34px;
  background-color: #99ceff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 49px;
`;

const GrayHr = styled.hr`
  width: 988px;
  border: 1px solid #d3d3d3;
  margin: 0 0 0 18px;
`;
