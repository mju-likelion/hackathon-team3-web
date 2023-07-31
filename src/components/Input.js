import { styled } from 'styled-components';

const Input = ({ inputType, inputName, inputMsg }) => {
  return (
    <>
      <InputFrame>
        <InputFilled type={inputType} placeholder={inputName}></InputFilled>
      </InputFrame>
      <InputText>{inputMsg}</InputText>
    </>
  );
};

const InputFrame = styled.div`
  background-color: ${({ theme }) => theme.colors.LIGHTGRAY2};
  font-size: 20px;
  height: 55px;
  width: 450px;
  display: flex;
  padding: 10px;
`;
const InputFilled = styled.input`
  background-color: ${({ theme }) => theme.colors.LIGHTGRAY2};
  font-size: 20px;
  border-style: none;
  outline: none;
`;
const InputText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.GRAY2};
  margin: 6px 0 25px 75px;
  align-self: flex-start;
`;
export default Input;
