import { styled } from 'styled-components';
import Input from '../../components/Input';
import ButtonLong from '../../components/ButtonLong';

const Join = () => {
  return (
    <>
      <Header />
      <JoinFrame>
        <JoinBox>
          <h1>로그인</h1>
          <InputFilled />
          <InputFilled />
          <LongButton />
          <p></p>
        </JoinBox>
      </JoinFrame>
    </>
  );
};

const Header = styled.div`
  height: 100px;
`;

const JoinFrame = styled.div`
  height: 659px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const JoinBox = styled.div`
  height: 480px;
  width: 600px;
  box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 10px 0px;
`;
export default Join;
