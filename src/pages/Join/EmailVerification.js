import { useEffect, useState } from 'react';
import styled from 'styled-components';
import EmailVerificationApi from '../../api/Auth/EmailVerificationApi';
import { useParams } from 'react-router-dom';

const EmailVerification = () => {
  //   const { verifyToken } = useParams();
  const [isVerified, setIsVerified] = useState(null);
  const urlParams = new URLSearchParams(window.location.search);
  const verifyToken = urlParams.get('verifyToken');
  //   const verifyToken = '2f9ac20d-0b99-471b-9f8e-158f597f8f38';
  useEffect(() => {
    // 이메일 인증을 처리하기 위한 API 호출
    EmailVerificationApi(verifyToken, callbackFunctions);
  });
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
          <VerificationText>
            {isVerified === true && (
              <p>인증완료! 회원가입이 성공적으로 완료되었습니다.</p>
            )}
            {isVerified === false && (
              <p>인증이 실패되었습니다. 다시 시도해주세요.</p>
            )}
            {isVerified === null && <p>인증을 확인하고 있습니다...</p>}
          </VerificationText>
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
  background-color: pink;
  margin-top: 80px;
  height: 200px;
  width: 600px;
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

const VerificationText = styled.p`
  width: 500px;
  font-weight: 900;
  font-size: 25px;
`;
export default EmailVerification;
