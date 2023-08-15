import styled from 'styled-components';
import search_icon from '../../assets/images/search_icon.svg';
import SquareButton from '../../components/SquareButton';
import { useEffect, useState } from 'react';
import next_icon from '../../assets/images/right_arrow_icon.svg';

const TypeFillBlank = ({
  defaultMsg,
  problemId,
  handleComplete,
  completeArr,
  onClick,
  isChapterComplete,
}) => {
  const [userAnswer, setUserAnswer] = useState(undefined);
  const [isNextBtnAble, setIsNextBtnAble] = useState(false);
  const regex = /(@+)/; // "@" 문자가 1회 이상 연속적으로 나타나는 패턴을 찾는 정규표현식
  const parts = defaultMsg.split(regex);

  const onSubmit = async (event) => {
    event.preventDefault();
    await handleComplete(problemId, userAnswer);
    setTimeout(() => {
      setUserAnswer('');
    }, 1000);
  };

  useEffect(() => {
    if (isChapterComplete) {
      setIsNextBtnAble(false); // 마지막 문제라면 버튼 비활성화
    } else {
      setIsNextBtnAble(completeArr.includes(problemId));
    }
  }, [completeArr, problemId, isChapterComplete]);

  return (
    <FillBlankWrapper>
      <Form onSubmit={onSubmit}>
        <QuestionBox>
          <InputContainer>
            <QuestionText>{parts[0]}</QuestionText>
            <AnswerInput
              placeHolder='정답'
              answerlengthprop={parts[1].length}
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              autoFocus
            />
            <QuestionText>{parts[2]}</QuestionText>
          </InputContainer>
        </QuestionBox>
        <SearchBtn able={true} asset={search_icon} type='submit' />
      </Form>
      <NextBtn
        disabled={!isNextBtnAble}
        asset={next_icon}
        onClick={() => onClick()}
      />
    </FillBlankWrapper>
  );
};

const FillBlankWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;
const QuestionBox = styled.div`
  width: 640px;
  height: 70px;
  padding: 13px 20px 20px 20px;
  border-radius: 8px;
  background-color: white;
`;
const InputContainer = styled.div`
  border-bottom: 5px solid ${({ theme }) => theme.colors.BLUE};
  display: flex;
  align-items: center;
  gap: 4px;
`;
const QuestionText = styled.p`
  font-size: 23px;
  font-weight: 400;
`;
const AnswerInput = styled.input`
  width: ${({ answerlengthprop }) => answerlengthprop * 35}px;
  height: 35px;
  padding: 5px;
  border: none;
  font-size: 23px;
  font-weight: 600;
  line-height: 35px;
  background-color: ${({ theme }) => theme.colors.BG_LIGHTGRAY};
  &:focus {
    outline: none;
  }
`;
const SearchBtn = styled(SquareButton)``;
const NextBtn = styled(SquareButton)`
  align-self: end;
`;

export default TypeFillBlank;
