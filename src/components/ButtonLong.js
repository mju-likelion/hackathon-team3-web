import { styled } from 'styled-components';

const ButtonLong = ({ btnName }) => {
  return (
    <>
      <LongBtn>{btnName}</LongBtn>
    </>
  );
};
const LongBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.BLUE};
  height: 80px;
  width: 400px;
  border-radius: 25px;
  border-style: none;
  color: white;
  font-size: 26px;
  margin-top: 30px;
  font-weight: 700;
`;
export default ButtonLong;
