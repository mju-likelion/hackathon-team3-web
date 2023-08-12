import styled from 'styled-components';

const ChangePasswordInput = ({ type, name, placeholder, register, errors }) => {
  return (
    <>
      <InputContainer>
        <DisplayBox>
          <PasswordText>{type}</PasswordText>
          <InputBox
            id={name}
            name={name}
            type='password'
            placeholder={placeholder}
            {...register(name)}
          />
        </DisplayBox>
        <ErrorMsgBox>
          {errors[name] && <ErrorMsg>{errors[name].message}</ErrorMsg>}
        </ErrorMsgBox>
      </InputContainer>
    </>
  );
};

export default ChangePasswordInput;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DisplayBox = styled.div`
  display: flex;
  //background: gold;
  align-items: center;
`;

const PasswordText = styled.p`
  font-size: 17px;
  justify-content: center;
`;

const InputBox = styled.input`
  width: 260px;
  height: 38px;
  border: 1px solid black;
  border-radius: 8px;
  margin-left: 26px;
`;

const ErrorMsgBox = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10px;
`;
const ErrorMsg = styled.pre`
  font-size: 14px;
  color: #ff5454;
  margin-top: 5px;
  //text-align: center;
`;
