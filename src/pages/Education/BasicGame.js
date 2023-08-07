import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import SquareButton from '../../components/SquareButton';
import Content from '../../components/Content';
import logout_icon from '../../assets/images/logout_icon.svg';
import next_icon from '../../assets/images/next_icon.svg';
import sideBarBasicData from '../../assets/data/SideBar_DummyData_Basic.json';
import rateBasic from '../../assets/data/Rate_DummyData_Basic.json';

const BasicGame = () => {
  const navigate = useNavigate();
  const [currentChapter, setCurrentChapter] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const toggleChapter = (current) => {
    setCurrentChapter(current);
  };
  useEffect(() => {
    console.log(isLastPage)
  }, []);
  useEffect(() => {
    setIsLastPage(!(sideBarBasicData.chapters[currentChapter].isCompleted));
    console.log(isLastPage)
  }, [isLastPage, currentChapter]);

  return (
    <PageContainer>
      <SideBar
        title='기초 학습'
        sideBarData={sideBarBasicData.chapters}
        onClick={toggleChapter}
        currentChapter={currentChapter}
        rate={rateBasic.progress}
      />
      <ContentWrapper>
        <Content currentChapter={currentChapter} />
        <ButtonWrapper>
          <SquareButton
            disabled={false}
            asset={logout_icon}
            onClick={() => navigate('/education')}
          />
          <NextBtn
            disabled={false}
            asset={next_icon}
            onClick={() => setCurrentChapter(currentChapter + 1)}
            isLastPage={isLastPage}
          />
        </ButtonWrapper>
      </ContentWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 1280px;
  height: 769px;
  display: flex;
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

export default BasicGame;
