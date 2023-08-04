import { styled } from 'styled-components';

const ButtonLong = ({ btnName, width, isBtnAble, className }) => {
  return (
    <>
      <LongBtn width={width} className={className} isBtnAble={isBtnAble}>
        {btnName}
      </LongBtn>
    </>
  );
};
const LongBtn = styled.button`
  background-color: ${({ theme, isBtnAble }) =>
    isBtnAble ? theme.colors.BLUE : theme.colors.LIGHTGRAY3};
  height: 80px;
  width: ${({ width }) => width}px;
  border-radius: 25px;
  border-style: none;
  color: white;
  font-size: 26px;
  margin-top: 30px;
  font-weight: 700;
  cursor: ${({ isBtnAble }) => (isBtnAble ? `pointer` : `default`)};
`;
export default ButtonLong;
