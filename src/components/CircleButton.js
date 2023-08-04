import styled from 'styled-components';

const CircleButton = ({ value, onClick, className }) => {
  return (
    <Circle onClick={onClick} className={className}>
      {value}
    </Circle>
  );
};

const Circle = styled.button`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  line-height: ${({ width }) => width}px;
  background-color: ${({ theme }) => theme.colors.SKYBLUE};
  color: #1e1e1e;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background-color: ${({ theme }) => theme.colors.BLUE};
    color: white;
  }
`;

export default CircleButton;
