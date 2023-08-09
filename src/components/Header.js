import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderWrap>
        <HeaderBar>
          <Logo onClick={() => navigate('/')} />
          <Learning onClick={() => navigate('/education')}>학습하기</Learning>
          <SignBox>
            <LoginBtn onClick={() => navigate('/login')}>로그인</LoginBtn>
            <JoinBtn onClick={() => navigate('/join')}>회원가입</JoinBtn>
          </SignBox>
        </HeaderBar>
      </HeaderWrap>
    </>
  );
};

export default Header;
const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const HeaderBar = styled.div`
  width: 100%;
  height: 63px;
  box-shadow: 0 0 5px black;
  display: flex;
  align-items: center;
`;

const Logo = styled.button`
  width: 99px;
  height: 49px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.BTN_ABLE};
  margin: 7px 0 7px 22px;
  border-style: none;
`;

const Learning = styled.button`
  margin-left: 79px;
  font-size: 20px;
  color: black;
  border-style: none;
  background-color: white;
`;

const SignBox = styled.div`
  margin-left: auto;
  margin-right: 67px;
  display: flex;
  margin-top: 20px;
`;

const LoginBtn = styled.button`
  height: 27px;
  width: 90px;
  font-size: 17px;
  font-weight: 600;
  border-style: none;
  background-color: white;
`;
const JoinBtn = styled(LoginBtn)``;
