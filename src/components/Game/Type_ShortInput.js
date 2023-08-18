import styled from 'styled-components';
import { useEffect, useState } from 'react';
import SquareButton from './SquareButton';
import search_icon from '../../assets/images/search_icon.svg';
import next_icon from '../../assets/images/right_arrow_icon.svg';

const TypeShortInput = ({
  problemId,
  handleComplete,
  completeArr,
  onClick,
  isChapterComplete,
}) => {
  const [isNextBtnAble, setIsNextBtnAble] = useState(false);
  const [userAnswer, setUserAnswer] = useState(undefined);

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
    <InputWrapper>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <AnswerInput
            placeHolder='검색어를 입력하세요'
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            autoFocus
          />
        </InputContainer>
        <SearchBtn able={true} asset={search_icon} type='submit' />
      </Form>
      <NextBtn
        disabled={!isNextBtnAble}
        asset={next_icon}
        onClick={() => onClick()}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: calc(40vh);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;
const InputContainer = styled.div`
  width: calc(100vw - 250px - 60px - 200px - 140px);
  height: 70px;
  padding: 0 20px;
  border-radius: 8px;
  background-color: white;
`;
const AnswerInput = styled.input`
  margin: 5px 0;
  width: calc(100vw - 250px - 60px - 200px - 140px - 30px);
  height: 50px;
  border: none;
  border-bottom: 5px solid ${({ theme }) => theme.colors.BLUE};
  font-size: 25px;
  font-weight: 600;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
const SearchBtn = styled(SquareButton)``;
const NextBtn = styled(SquareButton)`
  align-self: end;
`;

export default TypeShortInput;
