import { styled } from 'styled-components';
import Input from '../../components/Input';
import ButtonLong from '../../components/ButtonLong';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const Join = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('사용하실 이메일을 입력해주세요.')
      .email('이메일형식에 맞지 않습니다.'),
    pw: yup
      .string()
      .required(
        '비밀번호를 영문과 숫자, 특수기호를 조합하여 8~14 글자 이하로 입력해주세요.'
      )
      .max(14, '비밀번호는 최대 14자리로 입력해주세요.')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}[^\s]*$/,
        '영문과 숫자, 특수기호를 조합하여 8~14 글자 이하로 입력해주세요.'
      ),
    checkPw: yup
      .string()
      .oneOf([yup.ref('pw'), null], '비밀번호가 일치하지 않습니다.')
      .required('입력하신 비밀번호를 한번 더 입력해주세요.'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onClickLogin = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Header />
      <JoinFrame>
        <JoinBox onSubmit={handleSubmit(onClickLogin)}>
          <h1>회원가입</h1>
          <JoinInput
            id='email'
            name='emil'
            type='text'
            placeholder='이메일'
            {...register('email')}
          />
          <ErrorMsg>{errors.email && errors.email.message}</ErrorMsg>
          <JoinInput
            id='password'
            name='pw'
            type='password'
            placeholder='비밀번호'
            {...register('pw')}
          />
          <ErrorMsg>{errors.pw && errors.pw.message}</ErrorMsg>
          <JoinInput
            id='checkPassword'
            name='checkPw'
            type='password'
            placeholder='비밀번호 확인'
            {...register('checkPw', {
              required: true,
            })}
          />
          <ErrorMsg>{errors.checkPw && errors.checkPw.message}</ErrorMsg>
          <ButtonLong type='submit' btnName='회원가입' />
        </JoinBox>
      </JoinFrame>
    </>
  );
};

const Header = styled.div`
  height: 100px;
`;

const JoinFrame = styled.div`
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
const JoinInput = styled.input`
  background-color: #eaeaea;
  font-size: 20px;
  border-style: none;
  outline: none;
  height: 55px;
  width: 450px;
  padding: 10px;
`;
const ErrorMsg = styled.p`
  font-size: 14px;
  color: #ff5454;
  margin: 6px 0 30px 75px;
  align-self: flex-start;
`;
export default Join;
