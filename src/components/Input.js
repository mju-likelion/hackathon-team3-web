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
  background-color: #eaeaea;
  height: 65px;
  width: 450px;
  display: flex;
  padding: 10px;
  margin-bottom: 8px;
`;
const InputFilled = styled.input`
  background-color: #eaeaea;
  font-size: 20px;
  border-style: none;
  outline: none;
`;
const InputText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.GRAY2};
  margin-bottom: 20px;
  align-self: flex-start;
  margin-left: 80px;
`;
export default Input;
