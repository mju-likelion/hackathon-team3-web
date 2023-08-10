import { styled } from 'styled-components';
import Input from '../../components/Input';
import ButtonLong from '../../components/ButtonLong';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { schema } from '../../hooks/validationYup';
import { JoinApi } from '../../api/JoinApi';

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

  const onClickJoin = (data) => {
    console.log(data);
    JoinApi(data, callbackFunctions);
  };
  const callbackFunctions = {
    navigateSuccess: () => navigate('/login'),
  };
  return (
    <>
      <Header />
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
