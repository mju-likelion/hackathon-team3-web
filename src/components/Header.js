import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetUserInfo } from '../api/Auth/GetUserInfo';
import { LogoutApi } from '../api/Auth/LogoutApi';
import Logo from '../assets/images/surfing-logo.png';
import LogoutIcon from '../assets/images/logout_icon.svg';

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const loginState = JSON.parse(sessionStorage.getItem('loginState'));

  useEffect(() => {
    if (loginState) {
      GetUserInfo((res) => {
        setUserName(res.data.user.nickname);
      });
    }
  }, []);

  const onClickLogout = (data) => {
    if (confirm('로그아웃 하시겠습니까?')) {
      LogoutApi(data, callbackFunctions);
    }
  };
  const callbackFunctions = {
    navigateSuccess: () => {
      window.sessionStorage.setItem('loginState', false);
      alert('로그아웃되었습니다. 메인으로 돌아갑니다.');
      location.replace('/');
    },
    navigateError: (error) => {
      console.log(error);
      error.response && navigate('/*');
    },
  };

  return (
    <HeaderBar>
      <LogoIcon src={Logo} onClick={() => navigate('/')} />
      <Learning onClick={() => navigate('/education')}>학습하기</Learning>
      {loginState ? (
        <SignBox>
          <UserPageBtn onClick={() => navigate('/mypage/education')}>
            {userName} 님 환영합니다!
          </UserPageBtn>
          <LogoutBtn onClick={onClickLogout}>
            <img src={LogoutIcon} alt='logout-icon' />
          </LogoutBtn>
        </SignBox>
      ) : (
        <SignBox>
          <SignBtn onClick={() => navigate('/login')}>로그인</SignBtn>
          <SignUpBtn onClick={() => navigate('/join')}>회원가입</SignUpBtn>
        </SignBox>
      )}
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.div`
  width: 100vw;
  height: 70px;
  box-shadow: 0 0 5px black;
  display: flex;
  align-items: center;
`;
const Learning = styled.button`
  margin-left: 30px;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
  font-weight: bold;
  border-style: none;
  background-color: white;
`;
const SignBox = styled.div`
  margin-left: auto;
  margin-right: 67px;
  display: flex;
`;
const SignBtn = styled.button`
  height: 27px;
  width: 90px;
  font-size: 23px;
  font-weight: bold;
  border-style: none;
  background-color: white;
  margin-right: 15px;
`;

const SignUpBtn = styled(SignBtn)`
  width: 110px;
`;
const UserPageBtn = styled(SignBtn)`
  width: 100%;
  margin-right: 10px;
  padding: 5px;
  font-size: 18px;
  font-weight: bold;
`;
const LogoutBtn = styled.button`
  margin-left: 20px;
  border-style: none;
  background-color: white;
`;
const LogoIcon = styled.img`
  width: 65px;
  height: 65px;
  margin-left: 30px;
  cursor: pointer;
`;
