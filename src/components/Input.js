import { styled } from 'styled-components';

const Input = ({ id, name, type, value, placeholder, register, errorMsg }) => {
  return (
    <>
      <InputWrap>
        <InputFrame>
          <InputFilled
            id={id}
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            {...register(name)}
          ></InputFilled>
        </InputFrame>
        <ErrorMsg>{errorMsg}</ErrorMsg>
      </InputWrap>
    </>
  );
};
const InputWrap = styled.div`
  margin-bottom: 30px;
`;
const InputFrame = styled.div`
  background-color: ${({ theme }) => theme.colors.INPUT_GRAY2};
  font-size: 20px;
  height: 55px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;
const InputFilled = styled.input`
  background-color: ${({ theme }) => theme.colors.INPUT_GRAY2};
  font-size: 20px;
  border-style: none;
  outline: none;
`;
const ErrorMsg = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.RED};
  align-self: flex-start;
  margin-top: 5px;
`;
export default Input;
