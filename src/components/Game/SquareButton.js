import styled from 'styled-components';

const SquareButton = ({ disabled, asset, ...attrProps }) => {
  return (
    <Button disabled={disabled} {...attrProps}>
      <Icon src={asset} />
    </Button>
  );
};

const Button = styled.button`
  width: 70px;
  height: 70px;
  padding: 10px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.BTN_DISABLE : theme.colors.BTN_ABLE};
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.BLUE};
  }
  cursor: ${({ disabled }) => disabled && `default`};
  visibility: ${({ disabled }) => (disabled ? `hidden` : `visible`)};
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export default SquareButton;
