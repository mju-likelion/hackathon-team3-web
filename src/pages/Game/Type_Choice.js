import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ChoiceCircle from '../../components/ChoiceCircle';
import ButtonLong from '../../components/ButtonLong';
import { PostScoring } from '../../api/PostScoring';

const TypeChoice = ({ options, problemId, handleComplete }) => {
  const [userAnswer, setUserAnswer] = useState(undefined);
  const [isBtnAble, setIsBtnAble] = useState(false);

  const accessToken = process.env.REACT_APP_TOKEN;

  const toggleClick = (userans) => {
    setUserAnswer(userans);
  };

  const onSubmit = () => {
    console.log(userAnswer);

    PostScoring(
      problemId,
      accessToken,
      userAnswer,
      (res) => res.data.isCorrect && handleComplete(problemId)
    );

    //body에 answer 보내야 함
  };

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
      <SubmitBtn
        btnName='제출하기'
        width={300}
        isBtnAble={isBtnAble}
        onClick={() => onSubmit()}
      />
    </ChoiceWrapper>
  );
};
const ChoiceWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SubmitBtn = styled(ButtonLong)`
  align-self: center;
  margin: 0;
`;

export default TypeChoice;
