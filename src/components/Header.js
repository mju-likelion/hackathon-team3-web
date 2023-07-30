import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <HeaderBar>
        <Logo />
        <Learning>학습하기</Learning>
        <SignBox>
          <LoginText>로그인</LoginText>
          <SignUpText>회원가입</SignUpText>
        </SignBox>
      </HeaderBar>
    </>
  );
};

export default Header;

const HeaderBar = styled.div`
  width: 1280px;
  height: 63px;
  box-shadow: 0 0 5px black;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 99px;
  height: 49px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.LIGHTBLUE};
  margin: 7px 0 7px 22px;
`;

const Learning = styled.p`
  margin-left: 79px;
  font-size: 20px;
  color: black;
`;

const SignBox = styled.div`
  margin-left: auto;
  margin-right: 67px;
  display: flex;
  margin-top: 20px;
`;

const LoginText = styled.p`
  font-size: 17px;
  font-weight: 600;
`;

const SignUpText = styled(LoginText)`
  padding-left: 28px;
`;
