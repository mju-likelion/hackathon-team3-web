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
  const callbackFunction = () => {
    console.log('성공!');
    alert('비밀번호가 수정되었습니다.');
  };

  const onSubmit = (data) => {
    const { oldPassword, password } = data;
    // 비밀번호 변경 api 호출 및 처리
    console.log(data);
    PatchPassword(oldPassword, password, callbackFunction);
  };

  return (
    <>
      <AllContainer>
        <ChangePasswordForm onSubmit={handleSubmit(onSubmit)}>
          <ChangePasswordTitle>비밀번호 변경</ChangePasswordTitle>
          <InputBox>
            <DisplayBox>
              <ChangePasswordInput
                type='기존 비밀번호'
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
              <ChangePasswordInput
                type='변경 비밀번호'
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
              <ChangePasswordInput
                type='비밀번호 확인'
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
  font-size: 35px;
  margin: 75px 0 45px 0;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
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

const ChangeButton = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 10px;
  font-size: 25px;
  border: none;
  color: white;
  font-weight: 600;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.GREEN};
`;
