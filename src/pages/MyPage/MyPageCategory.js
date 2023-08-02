import React from 'react';
import styled from 'styled-components';

const MyPageCategory = () => {
  return (
    <>
      <CategoryBox>
        <MyPageText>마이페이지</MyPageText>
        <MyPageLine />
        <CategoryEdu>학습현황</CategoryEdu>
        <CategoryAccount>내 계정</CategoryAccount>
      </CategoryBox>
    </>
  );
};

export default MyPageCategory;

const CategoryBox = styled.div`
  width: 228px;
  height: 769px;
  //background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
`;

const MyPageText = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #59a4fb;
  margin-top: 21px;
`;

const MyPageLine = styled.hr`
  width: 223px;
  height: 1px;
  color: #59a4fb;
  border: 1px solid #59a4fb;
  margin-top: 14px;
  margin-bottom: 0;
`;

const CategoryEdu = styled.p`
  font-size: 25px;
  margin-top: 38px;
`;

const CategoryAccount = styled(CategoryEdu)`
  font-size: 25px;
  margin-top: 52px;
`;
