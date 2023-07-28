import { styled } from 'styled-components';

const signup = () => {
  return (
    <>
      <Header />
      <JoinFrame>
        <JoinBox></JoinBox>
      </JoinFrame>
    </>
  );
};

const Header = styled.div`
  height: 100px;
`;

const JoinFrame = styled.div`
  background-color: pink;
  height: 659px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const JoinBox = styled.div`
  background-color: rosybrown;
  height: 480px;
  width: 600px;
`;
export default signup;
