import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ChoiceCircle from '../../components/ChoiceCircle';
import ButtonLong from '../../components/ButtonLong';

const TypeChoice = ({ options }) => {
  const [clickedId, setClickedId] = useState(undefined);
  const [isBtnAble, setIsBtnAble] = useState(false);

  const toggleClick = (idx) => {
    setClickedId(idx);
  };

  useEffect(() => {
    setIsBtnAble(clickedId !== undefined);
  }, [clickedId, isBtnAble]);

  return (
    <ChoiceWrapper>
      <CircleContainer>
        {options.map((option, index) => {
          return (
            <ChoiceCircle
              key={option}
              value={option}
              onClick={() => toggleClick(index)}
              idx={index}
              clickedId={clickedId}
            />
          );
        })}
      </CircleContainer>
      <SubmitBtn btnName='제출하기' width={300} isBtnAble={isBtnAble} />
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
