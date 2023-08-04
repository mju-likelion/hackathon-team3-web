import styled from 'styled-components';
import CircleButton from './CircleButton';

const TypeChoice = ({ option }) => {
  return (
    <ChoiceWrapper>
      {option.map((option) => {
        return (
          <CircleButton key={option} value={option} width={175} fontsize={40} />
        );
      })}
    </ChoiceWrapper>
  );
};

const ChoiceWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default TypeChoice;
