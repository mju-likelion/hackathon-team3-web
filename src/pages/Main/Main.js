import styled from 'styled-components';
import MainBanner from './MainBanner';
import { useNavigate } from 'react-router-dom';

import EduIcon from '../../assets/images/icon_edu.png';
import MyPage from '../../assets/images/icon_mypage.png';

const Main = () => {
  const navigate = useNavigate();
  const loginState = JSON.parse(localStorage.getItem('loginState'));

  const onClickMypage = () => {
    if (loginState === false) {
      alert('로그인이 필요합니다.');
      navigate('/login');
    } else navigate('/mypage/education');
  };
  return (
    <>
      <MainContainer>
        <BannerBox>
          <MainBanner />
        </BannerBox>
        <FunctionBox>
          <IconBox>
            <EduBtn src={EduIcon} onClick={() => navigate('/education')} />
            <IconText>학습</IconText>
          </IconBox>
          <IconBox>
            <MyPageBtn src={MyPage} onClick={onClickMypage} />
            <IconText>마이페이지</IconText>
          </IconBox>
        </FunctionBox>
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerBox = styled.div`
  margin-top: 110px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background: mediumpurple;
`;

const FunctionBox = styled.div`
  margin-top: 55px;
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

const IconBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  width: 200px;
  height: 200px;
  border-radius: 100%;
`;

const EduBtn = styled.img`
  width: 127px;
  height: 132px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
`;

const IconText = styled.p`
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
`;

const MyPageBtn = styled.img`
  width: 127px;
  height: 132px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
`;
