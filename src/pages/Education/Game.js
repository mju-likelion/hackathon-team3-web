import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetChapters } from '../../api/Game/GetChapters';
import { GetChapter } from '../../api/Game/GetChapter';
import SideBar from '../../components/Game/SideBar';
import SquareButton from '../../components/Game/SquareButton';
import Content from '../../components/Game/Content';
import exit_icon from '../../assets/images/exit_icon.svg';
import next_icon from '../../assets/images/next_icon.svg';

const Game = ({ type }) => {
  const isBasic = type === 'basic';
  const navigate = useNavigate();
  const [sideBarData, setSideBarData] = useState([]); // 목차 데이터
  const [rateData, setRateData] = useState(null); // 진도율 데이터
  const [chapterData, setChapterData] = useState({}); // 문제 데이터
  const [currentChapterId, setCurrentChapterId] = useState(undefined); // 현재 챕터
  const [isChapterComplete, setIsChapterComplete] = useState(false);
  const [ableChapterIndex, setAbleChapterIndex] = useState(0);

  useEffect(() => {
    GetChapters(isBasic ? 0 : 1, (res) => {
      setSideBarData(res.data);
      setRateData(res.data.progress);
      if (!currentChapterId) {
        setCurrentChapterId(res.data?.chapters[0]?.id);
      }
    });
  }, [currentChapterId, sideBarData, type]);
  useEffect(() => {
    if (currentChapterId !== undefined) {
      GetChapter(currentChapterId, (res) => {
        setChapterData(res.data?.chapter);
      });
    }
  }, [currentChapterId, type]);
  useEffect(() => {
    setCurrentChapterId(0);
  }, [type]);

  return (
    sideBarData &&
    rateData !== null &&
    chapterData && (
      <PageContainer>
        <SideBar
          title={isBasic ? '기초 학습' : '심화 학습'}
          sideBarData={sideBarData.chapters}
          onClick={(currentId) => setCurrentChapterId(currentId)}
          currentChapterId={currentChapterId}
          rate={rateData}
          ableChapterIndex={ableChapterIndex}
          setAbleChapterIndex={setAbleChapterIndex}
        />
        <ContentWrapper>
          <Content
            chapterData={chapterData}
            isChapterComplete={isChapterComplete}
            toggleCompleteChapter={(isComplete) =>
              setIsChapterComplete(isComplete)
            }
          />
          <ButtonWrapper>
            <SquareButton
              disabled={false}
              asset={exit_icon}
              onClick={() => navigate('/education')}
            />
            <NextBtn
              disabled={!isChapterComplete}
              asset={next_icon}
              onClick={() => {
                const currentChapterIndex = sideBarData.chapters.findIndex(
                  (chapter) => chapter.id === currentChapterId
                );
                if (currentChapterIndex < sideBarData.chapters.length - 1) {
                  setCurrentChapterId(
                    sideBarData.chapters[currentChapterIndex + 1].id
                  );
                } else {
                  setCurrentChapterId(sideBarData.chapters.at(-1).id);
                  console.log(type);
                  navigate(
                    type === 'basic' ? '/education/advanced' : '/complete'
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
  height: 730px;
  display: flex;
`;
const ContentWrapper = styled.div`
  width: calc(100vw - 240px);
  height: calc(100vh - 70px);
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

export default Game;
