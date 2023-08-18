import { styled } from 'styled-components';

const ButtonLong = ({ btnName, width, isBtnAble, ...attrProps }) => {
  return (
    <LongBtn width={width} isBtnAble={isBtnAble} {...attrProps}>
      {btnName}
    </LongBtn>
  );
};
const LongBtn = styled.button`
  background-color: ${({ theme, isBtnAble }) =>
    isBtnAble ? theme.colors.BLUE : theme.colors.BTN_DISABLE};
  height: 80px;
  width: ${({ width }) => width}px;
  border-radius: 25px;
  border-style: none;
  color: white;
  font-size: 26px;
  font-weight: 700;
  cursor: ${({ isBtnAble }) => (isBtnAble ? `pointer` : `default`)};
`;

export default ButtonLong;
