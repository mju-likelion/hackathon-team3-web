import styled from 'styled-components';
import MainBanner from './MainBanner';
import { useNavigate } from 'react-router-dom';

import EduIcon from '../../assets/images/icon_edu.png';
import MyPage from '../../assets/images/icon_mypage.png';

const Main = () => {
  const navigate = useNavigate();
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
            <MyPageBtn
              src={MyPage}
              onClick={() => navigate('/mypage/education')}
            />
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
  margin-top: 120px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background: mediumpurple;
`;

const FunctionBox = styled.div`
  margin-top: 66px;
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

const IconBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
`;

const EduBtn = styled.img`
  width: 127px;
  height: 132px;
`;
const IconText = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

const MyPageBtn = styled.img`
  width: 127px;
  height: 132px;
`;
