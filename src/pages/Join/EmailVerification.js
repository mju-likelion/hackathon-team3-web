import { useEffect, useState } from 'react';
import styled from 'styled-components';
import EmailVerificationApi from '../../api/Auth/EmailVerificationApi';
import { useNavigate } from 'react-router-dom';
const EmailVerification = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(null);
  const urlParams = new URLSearchParams(window.location.search);
  const verifyToken = urlParams.get('verifyToken');
  useEffect(() => {
    EmailVerificationApi(verifyToken, callbackFunctions);
  }, [verifyToken]);
  const callbackFunctions = {
    navigateSuccess: (res) => {
      console.log(res);
      setIsVerified(true);
    },
    navigateError: (error) => {
      console.log(error);
    },
  };
  return (
    <>
      <EmailVerificationWrap>
        <EmailVerificationBox>
          {isVerified === true && (
            <VerifiedBox>
              <p>인증완료! 회원가입이 성공적으로 완료되었습니다.</p>
              <button onClick={() => navigate('/login')}>로그인하러가기</button>
            </VerifiedBox>
          )}
          {isVerified === false && (
            <VerifiedBox>
              <p>인증이 실패되었습니다. 다시 시도해주세요.</p>
              <button onClick={() => navigate('/')}>메인으로</button>
            </VerifiedBox>
          )}
          {isVerified === null && (
            <VerifiedBox>
              <p>인증을 하고 있습니다...</p>
              <button onClick={() => navigate('/')}>메인으로</button>
            </VerifiedBox>
          )}
        </EmailVerificationBox>
      </EmailVerificationWrap>
    </>
  );
};

const EmailVerificationWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const EmailVerificationBox = styled.div`
  background-color: ${({ theme }) => theme.colors.BG_SKYBLUE};
  margin-top: 80px;
  height: 200px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 10px 0px;
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 50px;
  }
`;
const VerifiedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 25px;
    margin-bottom: 40px;
  }
  button {
    background-color: ${({ theme }) => theme.colors.BLUE};
    padding: 10px;
    height: 50px;
    border-radius: 10px;
    font-size: 24px;
    color: white;
    font-weight: 600;
  }
`;
export default EmailVerification;
