import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '../assets/images/logout_icon.svg';
import { GetUserInfo } from '../api/GetUserInfo';
import { useEffect, useState } from 'react';
import { LogoutApi } from '../api/LogoutApi';
import Logo from '../assets/images/surfing-logo.png';

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    GetUserInfo((res) => {
      setUserName(res.data.user.nickname);
      console.log(res);
      setIsLogin(true);
    });
  }, []);

  const onClickLogout = (data) => {
    if (confirm('로그아웃 하시겠습니까?')) {
      LogoutApi(data, callbackFunctions);
    }
  };
  const callbackFunctions = {
    navigateSuccess: () => {
      alert('로그아웃되었습니다. 메인으로 돌아갑니다.');
      setIsLogin(false);
      navigate('/');
    },
    navigateError: (error) => {
      console.log(error);
      error.response && navigate('/*');
    },
  };

  return (
    <>
      <HeaderWrap>
        <HeaderBar>
          <LogoIcon src={Logo} onClick={() => navigate('/')} />
          <Learning onClick={() => navigate('/education')}>학습하기</Learning>
          {isLogin ? (
            <UserBox>
              <UserPageBtn onClick={() => navigate('/mypage/education')}>
                {userName} 님 환영합니다!
              </UserPageBtn>
              {/* <UserPageBtn onClick={() => navigate('/mypage/education')}>
                마이페이지
              </UserPageBtn> */}
              <LogoutBtn onClick={onClickLogout}>
                <img src={LogoutIcon} alt='logout-icon' />
              </LogoutBtn>
            </UserBox>
          ) : (
            <SignBox>
              <LoginBtn onClick={() => navigate('/login')}>로그인</LoginBtn>
              <LoginBtn onClick={() => navigate('/join')}>회원가입</LoginBtn>
            </SignBox>
          )}
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
  width: 1280px;
  height: 100px;
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
const UserBox = styled(SignBox)`
  p {
    margin-right: 15px;
    padding: 5px;
    font-size: 18px;
  }
`;
const LoginBtn = styled.button`
  height: 27px;
  width: 90px;
  font-size: 23px;
  font-weight: bold;
  border-style: none;
  background-color: white;
  margin-right: 15px;
`;

const UserPageBtn = styled(LoginBtn)`
  width: 200px;
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
  width: 80px;
  height: 80px;
  margin-left: 30px;
  cursor: pointer;
`;
