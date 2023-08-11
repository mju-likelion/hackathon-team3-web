import styled from 'styled-components';
import Type_Choice from '../pages/Game/Type_Choice';
import Type_ShortInput from '../pages/Game/Type_ShortInput';
import Type_FillBlank from '../pages/Game/Type_FillBlank';
import { useEffect, useState } from 'react';
import bulb_icon from '../assets/images/bulb_icon.svg';
import HelpModal from './HelpModal';
import { PostScoring } from '../api/PostScoring';

const Content = ({ chapterData }) => {
  const { helpMessage, problemList, title } = chapterData || {};
  const [isModal, setIsModal] = useState(false);
  const [currentProblemId, setCurrentProblemId] = useState(
    problemList?.[0]?.id || null
  );
  const [currentProblem, setCurrentProblem] = useState(problemList?.[0]);
  const [completeArr, setCompleteArr] = useState([]);
  const [ableProblem, setAbleProblem] = useState([]);

  // const [AllComplete, setAllComplete] = useState(false); //todo 모두 정답 여부 : 다음 챕터 버튼 활성화

  const accessToken = process.env.REACT_APP_TOKEN;

  const togglecurrentQuestion = (curProblemId) => {
    setCurrentProblemId(curProblemId);
  };
  const toggleModal = () => {
    setIsModal((prev) => !prev);
  };
  const handleNext = () => {
    setCurrentProblemId(problemList[completeArr.length].id);
  };
  const handleComplete = (problemId, userAnswer) => {
    PostScoring(
      problemId,
      accessToken,
      userAnswer,
      (res) =>
        res.data.isCorrect &&
        !completeArr.includes(problemId) &&
        setCompleteArr([...completeArr, problemId]) &&
        setAbleProblem([...ableProblem, problemId])
    );
  };

  //chapterData가 바뀔 때마다 초기화
  useEffect(() => {
    setCompleteArr([]);
  }, [chapterData]);

  useEffect(() => {
    setAbleProblem([]);
  }, [chapterData]);

  useEffect(() => {
    setCurrentProblemId(problemList?.[0]?.id || null);
  }, [chapterData]);

  useEffect(() => {
    setCurrentProblem(
      problemList.find((problem) => problem.id === currentProblemId)
    );
  }, [currentProblemId]);

  useEffect(() => {
    setCurrentProblem(problemList?.[0]);
  }, [chapterData]);

  useEffect(() => {
    if (completeArr.length === problemList.length) setAbleProblem([]);
    else setAbleProblem(problemList[completeArr.length].id);
  }, [completeArr, problemList]);

  return (
    <ContentContainer>
      {problemList && currentProblemId && (
        <>
          <ChapterTitle>{title}</ChapterTitle>
          <TapWrapper>
            <TapContainer>
              {problemList.map((tap, index) => {
                return (
                  <Tap
                    key={tap.id}
                    onClick={() => togglecurrentQuestion(tap.id)}
                    id={tap.id}
                    currentProblemId={currentProblemId}
                    disabled={
                      tap.id === problemList[0].id
                        ? false
                        : !ableProblem.includes(tap.id) &&
                          !completeArr.includes(tap.id)
                    }
                  >
                    {index + 1}
                  </Tap>
                );
              })}
            </TapContainer>
            <HelpButton onClick={toggleModal} isModal={isModal}>
              <HelpIcon src={bulb_icon} />
            </HelpButton>
          </TapWrapper>
          <ContentBox isModal={isModal}>
            {isModal ? (
              <HelpModal isModal={isModal} helpMsg={helpMessage} />
            ) : (
              <>
                <ScenarioBox>
                  <ScenarioText>{currentProblem.scenario}</ScenarioText>
                </ScenarioBox>
                <QuestionBox>{currentProblem.question}</QuestionBox>
                <SubmitBox>
                  {currentProblem.type === 'MCQ' && (
                    <Type_Choice
                      options={currentProblem.answerOptions}
                      handleComplete={(problemId, userAnswer) =>
                        handleComplete(problemId, userAnswer)
                      }
                      problemId={currentProblem.id}
                      completeArr={completeArr}
                      onClick={() => handleNext()}
                    />
                  )}
                  {currentProblem.type === 'SAQ' && (
                    <Type_ShortInput
                      handleComplete={(problemId, userAnswer) =>
                        handleComplete(problemId, userAnswer)
                      }
                      problemId={currentProblem.id}
                      completeArr={completeArr}
                      onClick={() => handleNext()}
                    />
                  )}
                  {currentProblem.type === 'FITB' && (
                    <Type_FillBlank
                      defaultMsg={currentProblem.question}
                      handleComplete={(problemId, userAnswer) =>
                        handleComplete(problemId, userAnswer)
                      }
                      problemId={currentProblem.id}
                      completeArr={completeArr}
                      onClick={() => handleNext()}
                    />
                  )}
                </SubmitBox>
              </>
            )}
          </ContentBox>
        </>
      )}
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 900px;
  height: 100%;
`;
const ChapterTitle = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
const TapWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TapContainer = styled.div`
  margin-left: 40px;
  display: flex;
  align-items: flex-end;
`;

const HelpButton = styled.button`
  width: 70px;
  height: 70px;
  margin-right: 25px;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme, isModal }) =>
    isModal ? `#ffe755` : theme.colors.YELLOW};
  &:hover {
    background-color: #ffe755;
  }
`;
const HelpIcon = styled.img`
  width: 60px;
  height: 65px;
  backdrop-filter: drop-shadow(white);
`;
const Tap = styled.button`
  width: 60px;
  height: ${({ currentProblemId, id }) =>
    id === currentProblemId ? 60 : 50}px;
  border-radius: 8px 8px 0 0;
  font-size: 36px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};
  color: ${({ theme, disabled, currentProblemId, id }) => {
    if (!disabled) {
      if (id === currentProblemId) return theme.colors.BTN_ABLE;
      else return `white`;
    } else return `white`;
  }};
  background-color: ${({ theme, disabled, currentProblemId, id }) => {
    if (!disabled) {
      if (id === currentProblemId) return theme.colors.BG_SKYBLUE;
      else return theme.colors.BTN_ABLE;
    } else return theme.colors.BTN_DISABLE;
  }};
`;
const ContentBox = styled.div`
  margin: 0 auto;
  width: 880px;
  height: 590px;
  padding: 15px 70px 0 70px;
  border-radius: 25px;
  background-color: #f1f8ff;
`;
const ScenarioBox = styled.div`
  width: 100%;
  height: 140px;
  padding: 10px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ScenarioText = styled.p`
  color: #1e1e1e;
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
`;
const QuestionBox = styled.div`
  width: 100%;
  height: 55px;
  margin-top: 10px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.BLUE};
  border-bottom: ${({ theme }) => theme.colors.BLUE} 5px dashed;
  font-size: 24px;
  font-weight: bold;
  line-height: 50px;
`;
const SubmitBox = styled.div`
  width: 100%;
  height: 320px;
  margin-top: 30px;
`;

export default Content;
