import { styled } from 'styled-components';
import Input from '../../components/Input';
import ButtonLong from '../../components/ButtonLong';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onClickLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  const onEmailHandler = (data) => {
    setEmail(data.target.value);
  };
  const onPasswordHandler = (data) => {
    setPassword(data.target.value);
  };
  return (
    <>
      <Header />
      <JoinFrame>
        <JoinBox onSubmit={onClickLogin}>
          <h1>로그인</h1>
          <Input
            name='email'
            value={email}
            inputType='text'
            inputName='이메일'
            onChange={onEmailHandler}
          />
          <Input
            name='password'
            value={password}
            inputType='password'
            inputName='비밀번호'
            onChange={onPasswordHandler}
          />
          <ButtonLong type='submit' btnName='로그인' />
          <BottomText>
            회원이 아니신가요 ? <Link to='/join'>회원가입 하러가기</Link>
          </BottomText>
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
