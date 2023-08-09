import { styled } from 'styled-components';
import Input from '../../components/Input';
import ButtonLong from '../../components/ButtonLong';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema } from '../../hooks/validationYup';
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onClickLogin = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <LoginFrame>
        <LoginBox onSubmit={handleSubmit(onClickLogin)}>
          <h1>로그인</h1>
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
            errorMsg={errors.pw && errors.pw.message}
            register={register}
          />
          <ButtonLong type='submit' btnName='로그인' />
          <BottomText>
            회원이 아니신가요 ? <Link to='/join'>회원가입 하러가기</Link>
          </BottomText>
        </LoginBox>
      </LoginFrame>
    </>
  );
};

const Header = styled.div`
  height: 100px;
`;

const LoginFrame = styled.div`
  height: 660px;
  display: flex;
  justify-content: center;
`;
const LoginBox = styled.form`
  height: 480px;
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
const BottomText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.GRAY2};
  margin: 20px;
  a:link {
    text-decoration: none;
  }
  a:visited {
    color: ${({ theme }) => theme.colors.BLUE};
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default Login;
