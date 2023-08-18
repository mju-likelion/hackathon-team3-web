import styled from 'styled-components';

const ChoiceCircle = ({ value, onClick, userAnswer }) => {
  return (
    <Circle onClick={onClick} value={value} userAnswer={userAnswer}>
      {value}
    </Circle>
  );
};

const Circle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  height: 175px;
  padding: 20px;
  border-radius: 50%;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  white-space: pre-line;
  word-break: keep-all;
  background-color: ${({ theme, value, userAnswer }) =>
    value === userAnswer ? theme.colors.BLUE : theme.colors.SKYBLUE};
  color: ${({ theme, value, userAnswer }) =>
    value === userAnswer ? `white` : theme.colors.TEXT_BLACK};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background-color: ${({ theme }) => theme.colors.BLUE};
    color: white;
  }
`;

export default ChoiceCircle;
