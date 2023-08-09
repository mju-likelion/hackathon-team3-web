import { styled } from 'styled-components';
import Input from '../../components/Input';
import ButtonLong from '../../components/ButtonLong';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { schema } from '../../hooks/validationYup';

const Join = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const getSavedUserInfos = () => {
    const userInfosJSON = localStorage.getItem('userInfos');
    try {
      return userInfosJSON ? JSON.parse(userInfosJSON) : [];
    } catch {
      return [];
    }
  };
  const userInfos = getSavedUserInfos();
  const saveUserInfos = (userInfos) => {
    localStorage.setItem('userInfos', JSON.stringify(userInfos));
  };
  const onClickJoin = (data) => {
    console.log(data);
    if (userInfos.findIndex(({ email }) => email === data.email) === -1) {
      userInfos.push({
        email: data.email,
        password: data.pw,
      });
      saveUserInfos(userInfos);
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } else {
      alert('이미 사용중인 이메일입니다. 다른 이메일을 입력해주세요.');
      reset();
    }
  };
  return (
    <>
      <Header />
      <JoinFrame>
        <JoinBox onSubmit={handleSubmit(onClickJoin)}>
          {/* handleSubmit() 이용시 새로고침 현상 X => e.preventDefualt() 설정 필요없다! */}
          <h1>회원가입</h1>
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
export default Join;
