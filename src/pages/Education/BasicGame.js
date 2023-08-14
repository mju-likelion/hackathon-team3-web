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

const BasicGame = () => {
  const navigate = useNavigate();
  const [sideBarData, setSideBarData] = useState(null); // 목차 데이터
  const [rateData, setRateData] = useState(null); // 진도율 데이터
  const [chapterData, setChapterData] = useState(null); // 문제 데이터
  const [currentChapterId, setCurrentChapterId] = useState(undefined); // 현재 챕터
  const [isChapterComplete, setIsChapterComplete] = useState(false);

  const toggleCompleteChapter = (iscomplete) => {
    setIsChapterComplete(iscomplete);
  };

  useEffect(() => {
    GetChapters(0, (res) => setSideBarData(res.data));
  }, []); //목차 불러오는 API
  useEffect(() => {
    GetRate(0, (res) => setRateData(res.data.progress));
  }, []);
  useEffect(() => {
    if (currentChapterId !== null) {
      GetChapter(currentChapterId, (res) => setChapterData(res.data.chapter));
    }
  }, [currentChapterId]);
  useEffect(() => {
    if (sideBarData?.chapters?.length > 0) {
      setCurrentChapterId(sideBarData.chapters[0].id);
    }
  }, [sideBarData]);

  return (
    sideBarData &&
    rateData !== null &&
    chapterData && (
      <PageContainer>
        <SideBar
          title='기초 학습'
          sideBarData={sideBarData.chapters}
          onClick={(currentId) => setCurrentChapterId(currentId)}
          currentChapterId={currentChapterId}
          rate={rateData}
        />
        <ContentWrapper>
          <Content
            chapterData={chapterData}
            isChapterComplete={isChapterComplete}
            toggleCompleteChapter={(isComplete) =>
              toggleCompleteChapter(isComplete)
            }
          />
          <ButtonWrapper>
            <SquareButton
              disabled={false}
              asset={logout_icon}
              onClick={() => navigate('/education')}
            />
            <NextBtn
              disabled={!isChapterComplete} // 버튼 활성화 조건을 반대로 수정했습니다.
              asset={next_icon}
              onClick={() => {
                const currentChapterIndex = sideBarData.chapters.findIndex(
                  (chapter) => chapter.id === currentChapterId
                );
                if (currentChapterIndex < sideBarData.chapters.length - 1) {
                  setCurrentChapterId(
                    sideBarData.chapters[currentChapterIndex + 1].id
                  );
                }
              }}
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
const NextBtn = styled(SquareButton)``;

export default BasicGame;
