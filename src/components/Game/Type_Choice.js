import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ChoiceCircle from '../Button/ChoiceCircle';
import ButtonLong from '../Button/ButtonLong';
import SquareButton from './SquareButton';
import next_icon from '../../assets/images/right_arrow_icon.svg';

const TypeChoice = ({
  options,
  problemId,
  handleComplete,
  completeArr,
  onClick,
  isChapterComplete,
}) => {
  const [userAnswer, setUserAnswer] = useState(undefined);
  const [isNextBtnAble, setIsNextBtnAble] = useState(false);
  const [isBtnAble, setIsBtnAble] = useState(false);
  const toggleClick = (userans) => {
    setUserAnswer(userans);
  };

  useEffect(() => {
    if (isChapterComplete) {
      setIsNextBtnAble(false); // 마지막 문제라면 버튼 비활성화
    } else {
      setIsNextBtnAble(completeArr.includes(problemId));
    }
  }, [completeArr, problemId, isChapterComplete]);
  useEffect(() => {
    setIsBtnAble(userAnswer !== undefined);
  }, [userAnswer, isBtnAble]);

  return (
    <ChoiceWrapper>
      <CircleContainer>
        {options.map((option) => {
          return (
            <ChoiceCircle
              key={option}
              value={option}
              onClick={() => toggleClick(option)}
              userAnswer={userAnswer}
            />
          );
        })}
      </CircleContainer>
      <ButtonContainer>
        <SubmitBtn
          btnName='제출하기'
          width={300}
          isBtnAble={isBtnAble}
          onClick={() => handleComplete(problemId, userAnswer)}
        />
        <SquareButton
          disabled={!isNextBtnAble}
          asset={next_icon}
          onClick={() => onClick()}
        />
      </ButtonContainer>
    </ChoiceWrapper>
  );
};
const ChoiceWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const CircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SubmitBtn = styled(ButtonLong)`
  margin: 0 auto 0 220px;
`;

export default TypeChoice;
