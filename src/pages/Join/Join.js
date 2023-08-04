import { styled } from 'styled-components';
import Input from '../../components/Input';
import ButtonLong from '../../components/ButtonLong';
const Join = () => {
  const inputMsg = {
    emil: '사용하실 이메일을 입력해주세요.',
    password:
      '영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력해주세요.',
    verifyPwd: '입력하신 비밀번호를 한번 더 입력해주세요.',
  };
  return (
    <>
      <Header />
      <JoinFrame>
        <JoinBox>
          <h1>회원가입</h1>
          <Input inputType='text' inputName='이메일' inputMsg={inputMsg.emil} />
          <Input
            inputType='password'
            inputName='비밀번호'
            inputMsg={inputMsg.password}
          />
          <Input
            inputType='password'
            inputName='비밀번호 확인'
            inputMsg={inputMsg.verifyPwd}
          />
          <ButtonLong btnName='회원가입' width={400} />
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
