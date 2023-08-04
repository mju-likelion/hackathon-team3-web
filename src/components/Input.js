import { styled } from 'styled-components';

const Input = ({ inputType, inputName, name, value, onChange }) => {
  return (
    <>
      <InputFrame>
        <InputFilled
          name={name}
          value={value}
          type={inputType}
          placeholder={inputName}
          onChange={onChange}
        ></InputFilled>
      </InputFrame>
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
  margin-bottom: 35px;
`;
const InputFilled = styled.input`
  background-color: ${({ theme }) => theme.colors.LIGHTGRAY2};
  font-size: 20px;
  border-style: none;
  outline: none;
`;
export default Input;
