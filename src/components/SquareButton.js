import styled from 'styled-components';

const SquareButton = ({ able, asset, onClick }) => {
  return (
    <Button able={able} onClick={onClick}>
      <Icon src={asset} />
    </Button>
  );
};

const Button = styled.button`
  width: 70px;
  height: 70px;
  padding: 10px;
  background-color: ${({ theme, able }) =>
    able ? theme.colors.LIGHTBLUE : theme.colors.LIGHTGRAY3};
  border-radius: 8px;
  cursor: ${({ able }) => (able ? `pointer` : `default`)};
  &:hover {
    background-color: ${({ theme, able }) => able && theme.colors.BLUE};
  }
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export default SquareButton;
