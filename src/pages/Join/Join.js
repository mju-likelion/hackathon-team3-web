import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { schemaJoin } from '../../hooks/ValidationYup';
import { JoinApi } from '../../api/Auth/JoinApi';
import Input from '../../components/Input';
import ButtonLong from '../../components/Button/ButtonLong';

const Join = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaJoin),
    mode: 'onChange',
  });

  const onClickJoin = (data) => {
    JoinApi(data, callbackFunctions);
  };
  const callbackFunctions = {
    navigateSuccess: () => {
      alert(
        '이메일을 확인해주세요. 이메일 인증이 완료되면 회원가입이 완료됩니다!'
      );
      navigate('/email-verification');
    },
    navigateError: (error) => {
      error.response && error.response.status === 409
        ? alert('이미 사용중인 이메일입니다. 다른 이메일을 입력해주세요.')
        : navigate('/*');
    },
  };

  return (
    <JoinFrame>
      <JoinBox onSubmit={handleSubmit(onClickJoin)}>
        {/* handleSubmit() 이용시 새로고침 현상 X => e.preventDefualt() 설정 필요없다! */}
        <h1>회원가입</h1>
        <Input
          id='nickname'
          name='nickname'
          type='text'
          placeholder='닉네임'
          register={register}
          errorMsg={errors.nickname && errors.nickname.message}
        />
        <Input
          id='email'
          name='email'
          type='text'
          placeholder='이메일'
          register={register}
          errorMsg={errors.email && errors.email.message}
        />
        <Input
          id='password'
          name='pw'
          type='password'
          placeholder='비밀번호'
          register={register}
          errorMsg={errors.pw && errors.pw.message}
        />
        <Input
          id='checkPassword'
          name='checkPw'
          type='password'
          placeholder='비밀번호 확인'
          register={register}
          errorMsg={errors.checkPw && errors.checkPw.message}
        />
        <ButtonLong btnName='회원가입' width={400} isBtnAble={true} />
      </JoinBox>
    </JoinFrame>
  );
};

const JoinFrame = styled.div`
  margin-top: 70px;
  height: 660px;
  display: flex;
  justify-content: center;
`;
const JoinBox = styled.form`
  height: 620px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 10px 0px;
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 50px;
  }
`;
export default Join;
