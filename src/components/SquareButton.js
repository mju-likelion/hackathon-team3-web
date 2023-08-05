import styled from 'styled-components';

const SquareButton = ({ able, asset, ...attrProps }) => {
  return (
    <Button able={able} {...attrProps}>
      <Icon src={asset} />
    </Button>
  );
};

const Button = styled.button`
  width: 70px;
  height: 70px;
  padding: 10px;
  background-color: ${({ theme, able }) =>
    able ? theme.colors.BTN_ABLE : theme.colors.BTN_DISABLE};
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
