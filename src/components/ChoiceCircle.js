import styled from 'styled-components';

const ChoiceCircle = ({ value, onClick, idx, clickedId }) => {
  return (
    <Circle
      onClick={onClick}
      idx={idx}
      clickedId={clickedId}
    >
      {value}
    </Circle>
  );
};

const Circle = styled.button`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  line-height: 175px;
  background-color: ${({ theme, idx, clickedId }) =>
    idx === clickedId ? theme.colors.BLUE : theme.colors.SKYBLUE};
  color: ${({ theme, idx, clickedId }) => (idx === clickedId ? `white` : theme.colors.TEXT_BLACK)};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background-color: ${({ theme }) => theme.colors.BLUE};
    color: white;
  }
`;

export default ChoiceCircle;
