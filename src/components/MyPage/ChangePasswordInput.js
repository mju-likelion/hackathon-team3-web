import styled from 'styled-components';

const ChangePasswordInput = ({ type, name, placeholder, register, errors }) => {
  return (
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
  );
};

export default ChangePasswordInput;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const DisplayBox = styled.div`
  display: flex;
  align-items: center;
`;
const PasswordText = styled.p`
  font-size: 17px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;
const InputBox = styled.input`
  width: 260px;
  height: 38px;
  padding-left: 10px;
  border: 1px solid ${({ theme }) => theme.colors.TEXT_BLACK};
  border-radius: 8px;
  margin-left: 26px;
`;
const ErrorMsgBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 10px;
`;
const ErrorMsg = styled.pre`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.RED};
  margin-top: 5px;
`;
