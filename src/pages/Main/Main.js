import styled from 'styled-components';
import MainBanner from './MainBanner';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <BannerBox>
        <MainBanner />
      </BannerBox>
      <FunctionBox>
        <EduBtn onClick={() => navigate('/education')}>학습</EduBtn>
        <MyPageBtn onClick={() => navigate('/mypage/education')}>
          마이페이지
        </MyPageBtn>
      </FunctionBox>
    </>
  );
};

export default Main;

const BannerBox = styled.div`
  margin-top: 143px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const MainBanner = styled.div`
//   width: 733px;
//   height: 305px;
//   border-radius: 20px;
//   background-color: #badeff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 0 0 5px rgb(0, 0, 0, 0.3);
// `;

const PrevBtn = styled.img`
  margin-right: 27px;
`;

const NextBtn = styled.img`
  margin-left: 27px;
`;

const FunctionBox = styled.div`
  margin-top: 66px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

// 아이콘 확정하기 전 임시
const EduBtn = styled.div`
  width: 127px;
  height: 132px;
  background-color: green;
`;

const MyPageBtn = styled.div`
  width: 127px;
  height: 132px;
  background-color: pink;
  margin-left: 133px;
`;
