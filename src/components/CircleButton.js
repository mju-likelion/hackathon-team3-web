import styled from 'styled-components';

const CircleButton = ({ value, width, fontsize, onClick }) => {
  return (
    <Circle width={width} fontsize={fontsize} onClick={onClick}>
      {value}
    </Circle>
  );
};

const Circle = styled.button`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: 50%;
  margin-left: 50px;
  font-size: ${({ fontsize }) => fontsize}px;
  font-weight: bold;
  text-align: center;
  line-height: ${({ width }) => width}px;
  color: #1e1e1e;
  background-color: ${({ theme }) => theme.colors.SKYBLUE};
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background-color: ${({ theme }) => theme.colors.BLUE};
    color: white;
  }
`;

export default CircleButton;
