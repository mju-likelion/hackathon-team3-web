import { styled } from 'styled-components';

const ButtonLong = () => {
  return (
    <>
      <BtnWrap>
        <LongBtn></LongBtn>
      </BtnWrap>
    </>
  );
};
const BtnWrap = styled.div``;
const LongBtn = styled.button`
  background-color: #59a4fb;
`;
export default ButtonLong;
