import styled from 'styled-components';
import SideBar from '../../components/SideBar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SquareButton from '../../components/SquareButton';
import Content from '../../components/Content';
import logout_icon from '../../assets/images/logout_icon.svg';
import next_icon from '../../assets/images/next_icon.svg';
// import sideBarAdvancedData from '../../assets/data/SideBar_DummyData_Advanced.json';
import rateAdvanced from '../../assets/data/Rate_DummyData_Advanced.json';
import { GetChapters } from '../../api/GetChapters';

const AdvancedGame = () => {
  const navigate = useNavigate();
  const [sideBarData, setSideBarData] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const toggleChapter = (title) => {
    setCurrentChapter(title);
  };

  const accessToken = process.env.REACT_APP_TOKEN;

  useEffect(() => {
    GetChapters(1, accessToken, (res) => setSideBarData(res.data));
    console.log(sideBarData);
  }, []);

  useEffect(() => {
    sideBarData &&
      setIsLastPage(!sideBarData.chapters[currentChapter - 1].isCompleted);
  }, [sideBarData, isLastPage, currentChapter]);

  return (
    sideBarData && (
      <PageContainer>
        <SideBar
          title='심화 학습'
          sideBarData={sideBarData.chapters}
          onClick={toggleChapter}
          currentChapter={currentChapter}
          rate={rateAdvanced.progress}
        />
        <ContentWrapper>
          <Content currentChapter={currentChapter} />
          <ButtonWrapper>
            <SquareButton
              able={true}
              asset={logout_icon}
              onClick={() => navigate('/education')}
            />
            <NextBtn
              able={true}
              asset={next_icon}
              onClick={() => setCurrentChapter(currentChapter + 1)}
              isLastPage={isLastPage}
            />
          </ButtonWrapper>
        </ContentWrapper>
      </PageContainer>
    )
  );
};

const PageContainer = styled.div`
  width: 1280px;
  height: 769px;
  display: flex;
  border: 1px solid black;
`;
const ContentWrapper = styled.div`
  width: 1030px;
  height: 769px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
const NextBtn = styled(SquareButton)`
  visibility: ${({ isLastPage }) => (isLastPage ? `hidden` : `visible`)};
`;

export default AdvancedGame;
