import styled from 'styled-components';

const ChangePasswordInput = ({ name, placeholder, register, errors }) => {
  return (
    <>
      <InputBox
        id={name}
        name={name}
        type='password'
        placeholder={placeholder}
        {...register(name)}
      />
      {errors[name] && <ErrorMsg>{errors[name].message}</ErrorMsg>}
    </>
  );
};

export default ChangePasswordInput;

const InputBox = styled.input`
  width: 260px;
  height: 38px;
  border: 1px solid black;
  border-radius: 8px;
  margin-left: 26px;
`;

const ErrorMsg = styled.p`
  font-size: 14px;
  color: #ff5454;
  //margin: 6px 0 30px 75px;
  align-self: flex-start;
`;
