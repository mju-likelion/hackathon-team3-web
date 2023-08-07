import styled from 'styled-components';
import Type_Choice from '../pages/Game/Type_Choice';
import Type_ShortInput from '../pages/Game/Type_ShortInput';
import Type_FillBlank from '../pages/Game/Type_FillBlank';
import Choice_Dummy from '../assets/data/Content_Choice_Dummy.json';
import Short_Dummy from '../assets/data/Content_Short_Dummy.json';
import Fill_Dummy from '../assets/data/Content_Fill_Dummy.json';
import { useEffect, useState } from 'react';

const Content = ({ currentChapter }) => {
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
  useEffect(() => {
    setCompleteCount(completeArr.length);
    if (completeArr.length === completeCount) setAllComplete((prev) => !prev);
  }, [completeArr, completeCount]);

  // 더미데이터는 문제 유형 별로 나눠서 추가 해두었지만,
  // 실제 로직은 목차 API에서 가져온 Chapter id로 문제들 요청, 해당 문제 API를 뿌림
  // 문제 유형 정보는 해당 문제 API response에 들어있음
  // const { type, title, scenario, question, help, option } = Choice_Dummy[currentQuestion]; //객관식 더미데이터
  // const { type, title, scenario, question, help } = Short_Dummy[0]; //주관식 더미데이터
  const { type, title, scenario, question, help } = Fill_Dummy[0]; //빈칸 채우기 더미데이터

  return (
    <ContentContainer>
      {Choice_Dummy && (
        <>
          <ChapterTitle>
            {currentChapter}. {title}
          </ChapterTitle>
          <TapContainer>
            {Choice_Dummy.map((tap, index) => {
              return (
                <Tap
                  key={tap.id}
                  onClick={() => togglecurrentQuestion(index)}
                  index={index}
                  currentQuestion={currentQuestion}
                  complete={completeArr.includes(tap.id)}
                >
                  {index + 1}
                </Tap>
              );
            })}
          </TapContainer>
          <ContentBox>
            <ScenarioBox>
              <ScenarioText>{scenario}</ScenarioText>
            </ScenarioBox>
            <QuestionBox>{question}</QuestionBox>
            <SubmitBox>
              {type === 'a' && (
                <Type_Choice option={option} handleComplete={handleComplete} />
              )}
              {type === 'b' && (
                <Type_ShortInput handleComplete={handleComplete} />
              )}
              {type === 'c' && (
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
  color: ${({ theme }) => theme.colors.BLUE};
  color: ${({ theme, complete, currentQuestion, index }) => {
    if (complete) {
      if (index === currentQuestion) return theme.colors.BTN_ABLE;
      else return `white`;
    } else return `white`;
  }};
  background-color: ${({ theme, complete, currentQuestion, index }) => {
    if (complete) {
      if (index === currentQuestion) return theme.colors.BG_SKYBLUE;
      else return theme.colors.BTN_ABLE;
    } else return theme.colors.BTN_DISABLE;
  }};
};
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
