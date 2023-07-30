import { styled } from 'styled-components';

const Input = () => {
  return (
    <>
      <InputFrame>
        <InputFilled></InputFilled>
      </InputFrame>
    </>
  );
};

const InputFrame = styled.div`
  background-color: green;
  display: flex;
  justify-content: center;
`;
const InputFilled = styled.input`
  background-color: #eaeaea;
  height: 65px;
  width: 450px;
`;
export default Input;
