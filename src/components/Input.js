import { styled } from 'styled-components';

const Input = ({ inputType, inputName, inputMsg, register }) => {
  return (
    <>
      <InputFrame>
        <InputFilled
          type={inputType}
          placeholder={inputName}
          {...register(register)}
        ></InputFilled>
      </InputFrame>
      <InputText>{inputMsg}</InputText>
    </>
  );
};

const InputFrame = styled.div`
  background-color: #eaeaea;
  height: 45px;
  width: 450px;
  display: flex;
  padding: 10px;
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
  margin: 4px 0 20px 70px;
  align-self: flex-start;
`;
export default Input;
