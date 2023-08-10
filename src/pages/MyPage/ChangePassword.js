import { useForm } from 'react-hook-form';
import { schema } from './Validation';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import ChangePasswordInput from './ChangePasswordInput';
import { PatchPassword } from '../../api/PatchPassword';
const ChangePassword = () => {
  const {
    register,
    handleSubmit, // 폼 유효성검사, 제출처리, onSubmit 콜백을 인자로 받음
    formState: { errors },
    watch,
    setValue, // 입력 필드의 값 수동 변경. register로 등록된 값을 변화시킬 수 있음
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const inputValue = watch(); // 현재 필드의 값

  const accessToken = process.env.REACT_APP_TOKEN;

  const callbackFunction = () => {
    console.log('성공!');
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(accessToken);
    const { oldPassword, password } = data;
    // 비밀번호 변경 api 호출 및 처리
    console.log(data);
    PatchPassword(oldPassword, password, accessToken, callbackFunction);
  };

  return (
    <>
      <AllContainer>
        <ChangePasswordForm onSubmit={handleSubmit(onSubmit)}>
          <ChangePasswordTitle>비밀번호 변경</ChangePasswordTitle>
          <InputBox>
            <DisplayBox>
              <PasswordText>기존 비밀번호</PasswordText>
              <ChangePasswordInput
                name='oldPassword'
                placeholder='기존 비밀번호'
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                setValue={setValue}
                inputValue={inputValue}
              />
            </DisplayBox>
            <DisplayBox>
              <PasswordText>변경 비밀번호</PasswordText>
              <ChangePasswordInput
                name='password'
                placeholder='변경할 비밀번호'
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                setValue={setValue}
                inputValue={inputValue}
              />
            </DisplayBox>
            <DisplayBox>
              <PasswordText>비밀번호 확인</PasswordText>
              <ChangePasswordInput
                name='checkPassword'
                placeholder='비밀번호 확인'
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                setValue={setValue}
                inputValue={inputValue}
              />
            </DisplayBox>
          </InputBox>
          <ChangeButton type='submit'>변경하기</ChangeButton>
        </ChangePasswordForm>
      </AllContainer>
    </>
  );
};

export default ChangePassword;

const ChangePasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1052px;
`;

const ChangePasswordTitle = styled.h2`
  font-size: 32px;
  margin: 94px 0 45px 0;
`;

const InputBox = styled.div`
  :last-child {
    margin-bottom: 0;
  }
`;

const DisplayBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const PasswordText = styled.p`
  font-size: 17px;
`;

const ChangeButton = styled.button`
  width: 139px;
  height: 45px;
  border-radius: 10px;
  font-size: 17px;
  border: none;
  color: white;
  font-weight: 600;
  margin-top: 28px;
  margin-left: 250px; // 재확인
  background-color: ${({ theme }) => theme.colors.GREEN};
`;
