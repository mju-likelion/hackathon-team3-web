import styled from 'styled-components';
import Type_Choice from '../pages/Game/Type_Choice';
import Type_ShortInput from '../pages/Game/Type_ShortInput';
import Type_FillBlank from '../pages/Game/Type_FillBlank';
import Choice_Dummy from '../assets/data/Content_Choice_Dummy.json';
import Short_Dummy from '../assets/data/Content_Short_Dummy.json';
import Fill_Dummy from '../assets/data/Content_Fill_Dummy.json';

const Content = ({ currentChapter }) => {
  // const { type, title, scenario, question, help, option } = Choice_Dummy[0]; //객관식 더미데이터
  const { type, title, scenario, question, help } = Short_Dummy[0]; //주관식 더미데이터

  return (
    <ContentContainer>
      <ChapterTitle>
        {currentChapter}. {title}
      </ChapterTitle>
      <ContentBox>
        <ScenarioBox>
          <ScenarioText>{scenario}</ScenarioText>
        </ScenarioBox>
        <QuestionBox>{question}</QuestionBox>
        <SubmitBox>
          {type === 'a' && <Type_Choice option={option} />}
          {type === 'b' && <Type_ShortInput />}
          {type === 'c' && <Type_FillBlank />}
        </SubmitBox>
      </ContentBox>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 920px;
`;
const ChapterTitle = styled.p`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
const ContentBox = styled.div`
  margin: 0 auto;
  width: 880px;
  height: 600px;
  padding: 20px 70px;
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
  height: 50px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.BLUE};
  border-bottom: ${({ theme }) => theme.colors.BLUE} 5px dashed;
  font-size: 24px;
  font-weight: bold;
  line-height: 50px;
`;
const SubmitBox = styled.div`
  width: 100%;
  height: 330px;
  margin-top: 30px;
`;

export default Content;
