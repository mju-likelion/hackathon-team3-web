import styled from 'styled-components';

const ChoiceCircle = ({ value, onClick, className, idx, clickedId }) => {
  return (
    <Circle
      onClick={onClick}
      className={className}
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
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  line-height: 175px;
  background-color: ${({ theme, idx, clickedId }) =>
    idx === clickedId ? theme.colors.BLUE : theme.colors.SKYBLUE};
  color: ${({ idx, clickedId }) => (idx === clickedId ? `white` : `#1e1e1e`)};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background-color: ${({ theme }) => theme.colors.BLUE};
    color: white;
  }
`;

export default ChoiceCircle;
