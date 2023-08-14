import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import SquareButton from '../../components/SquareButton';
import Content from '../../components/Content';
import logout_icon from '../../assets/images/logout_icon.svg';
import next_icon from '../../assets/images/next_icon.svg';

import { GetChapters } from '../../api/GetChapters';
import { GetRate } from '../../api/GetRate';
import { GetChapter } from '../../api/GetChapter';

const AdvancedGame = () => {
  const navigate = useNavigate();

  const [sideBarData, setSideBarData] = useState(null); // 목차 데이터
  const [rateData, setRateData] = useState(null); //진도율 데이터
  const [chapterData, setChapterData] = useState(null); // 문제 데이터
  const [currentChapterId, setCurrentChapterId] = useState(null); // 현재 챕터
  const [isLastPage, setIsLastPage] = useState(false);

  const toggleChapter = (currentId) => {
    setCurrentChapterId(currentId);
  };

  useEffect(() => {
    GetChapters(1, (res) => setSideBarData(res.data));
    if (sideBarData) console.log(sideBarData);
  }, []);

  useEffect(() => {
    GetRate(1, (res) => setRateData(res.data.progress));
  }, []);

  useEffect(() => {
    if (currentChapterId !== null) {
      GetChapter(currentChapterId, (res) => setChapterData(res.data.chapter));
    }
  }, [currentChapterId]);

  useEffect(() => {
    if (sideBarData) {
      setCurrentChapterId(sideBarData.chapters[0].id);
    }
  }, [sideBarData]);

  useEffect(() => {
    sideBarData &&
      setIsLastPage(!sideBarData.chapters[currentChapterId - 1].isCompleted);
  }, []);

  return (
    sideBarData &&
    rateData !== null &&
    chapterData && (
      <PageContainer>
        <SideBar
          title='심화 학습'
          sideBarData={sideBarData.chapters}
          onClick={toggleChapter}
          currentChapterId={currentChapterId}
          rate={rateData}
        />
        <ContentWrapper>
          <Content
            currentChapterId={currentChapterId}
            chapterData={chapterData}
          />
          <ButtonWrapper>
            <SquareButton
              disabled={false}
              asset={logout_icon}
              onClick={() => navigate('/education')}
            />
            <NextBtn
              disabled={true}
              asset={next_icon}
              onClick={() => setCurrentChapterId(currentChapterId)}
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
