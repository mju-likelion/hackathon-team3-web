import { useForm } from 'react-hook-form';
import { schema } from './Validation';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import ChangePasswordInput from './ChangePasswordInput';
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

  const onSubmit = (data) => {
    console.log(data);
    // 비밀번호 변경 api 호출 및 처리
  };

  return (
    <>
      <AllContainer>
        <ChangePasswordBox onSubmit={handleSubmit(onSubmit)}>
          <ChangePasswordTitle>비밀번호 변경</ChangePasswordTitle>
          {/*기존 비밀번호 로직*/}
          <PasswordText>비밀번호 변경</PasswordText>
          <ChangePasswordInput
            name='password'
            placeholder='변경할 비밀번호'
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            setValue={setValue}
            inputValue={inputValue}
          />
          <ChangePasswordInput
            name='checkPassword'
            placeholder='비밀번호 확인'
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            setValue={setValue}
            inputValue={inputValue}
          />
        </ChangePasswordBox>
      </AllContainer>
    </>
  );
};

export default ChangePassword;

const AllContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChangePasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1052px;
`;

const ChangePasswordTitle = styled.h2`
  font-size: 32px;
  margin: 91px 0 49px 0;
`;

const PasswordText = styled.p`
  font-size: 17px;
`;
