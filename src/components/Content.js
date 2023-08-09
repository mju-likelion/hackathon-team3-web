import styled from 'styled-components';
import Type_Choice from '../pages/Game/Type_Choice';
import Type_ShortInput from '../pages/Game/Type_ShortInput';
import Type_FillBlank from '../pages/Game/Type_FillBlank';
import { useEffect, useState } from 'react';

const Content = ({ currentChapterId, chapterData }) => {
  /*todo 현재 클릭 된 문제 currentQuestion state로 관리*/

  const [completeArr, setCompleteArr] = useState(['a', 'b']); // 임시 값
  const [currentQuestion, setCurrentQuestion] = useState(0); // 현재 선택된 문제
  const [completeCount, setCompleteCount] = useState(0); // 완료 된 문제 수
  const [AllComplete, setAllComplete] = useState(false); //todo 모두 정답 여부 : 다음 챕터 버튼 활성화

  const togglecurrentQuestion = (index) => {
    setCurrentQuestion(index);
  };

  //todo 한 문제 풀 때 마다 채점 API요청, (요청할 때 문제 id 보냄)
  //todo 정답일 경우 해당 문제 id를 completeArr 배열에 저장 : 맞은 문제 추가
  const handleComplete = (id) => {
    setCompleteArr([...completeArr, id]);
  };
  const { helpMessage, id, problemList, title, message, statusCode } =
    chapterData || {}; //객관식 테스트중

  useEffect(() => {
    setCompleteCount(completeArr.length);
    if (completeArr.length === completeCount) setAllComplete((prev) => !prev);
  }, [completeArr, completeCount]);

  return (
    <ContentContainer>
      {problemList && (
        <>
          <ChapterTitle>{title}</ChapterTitle>
          <TapContainer>
            {problemList.map((tap, index) => {
              return (
                <Tap
                  key={tap.id}
                  onClick={() => togglecurrentQuestion(index)}
                  index={index}
                  currentQuestion={currentQuestion}
                  // disabled={!completeArr.includes(tap.id)}
                  disabled={false} //채점 전 임시
                >
                  {index + 1}
                </Tap>
              );
            })}
          </TapContainer>
          <ContentBox>
            <ScenarioBox>
              <ScenarioText>
                {problemList[currentQuestion].scenario}
              </ScenarioText>
            </ScenarioBox>
            <QuestionBox>{problemList[currentQuestion].question}</QuestionBox>
            <SubmitBox>
              {problemList[currentQuestion].type === 'MCQ' && (
                <Type_Choice
                  options={problemList[currentQuestion].answerOptions}
                  handleComplete={handleComplete}
                />
              )}
              {problemList[currentQuestion].type === 'SAQ' && (
                <Type_ShortInput handleComplete={handleComplete} />
              )}

              {problemList[currentQuestion].type === 'FITB' && (
                <Type_FillBlank handleComplete={handleComplete} />
              )}
            </SubmitBox>
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
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
const TapContainer = styled.div`
  display: flex;
  margin-left: 50px;
  align-items: flex-end;
`;
const Tap = styled.button`
  width: 60px;
  height: ${({ currentQuestion, index }) =>
    index === currentQuestion ? 60 : 50}px;
  border-radius: 8px 8px 0 0;
  font-size: 36px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};
  color: ${({ theme, disabled, currentQuestion, index }) => {
    if (!disabled) {
      if (index === currentQuestion) return theme.colors.BTN_ABLE;
      else return `white`;
    } else return `white`;
  }};
  background-color: ${({ theme, disabled, currentQuestion, index }) => {
    if (!disabled) {
      if (index === currentQuestion) return theme.colors.BG_SKYBLUE;
      else return theme.colors.BTN_ABLE;
    } else return theme.colors.BTN_DISABLE;
  }};
}

;
`;
const ContentBox = styled.div`
  margin: 0 auto;
  width: 880px;
  height: 600px;
  padding: 20px 70px 10px 70px;
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
