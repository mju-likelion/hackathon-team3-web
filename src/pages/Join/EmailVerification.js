import { useEffect, useState } from 'react';
import styled from 'styled-components';
import EmailVerificationApi from '../../api/Auth/EmailVerificationApi';
import { useNavigate } from 'react-router-dom';
import MailIcon from '../../assets/images/email.png';
import SurfingLogo from '../../assets/images/surfing-logo.png';
const EmailVerification = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(true);
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
              <EmailTrue>
                <img src={SurfingLogo} alt='surfingIcon' />
                <EmailSendMsg>인증이 완료되었습니다!</EmailSendMsg>
              </EmailTrue>
              <EmailMsg>
                회원가입이 성공적으로 완료되었습니다. <br />
                이제 로그인 후 학습을 시작하실 수 있습니다.
              </EmailMsg>
              <button onClick={() => navigate('/login')}>로그인하러가기</button>
            </VerifiedBox>
          )}
          {isVerified === false && (
            <VerifiedFalse>
              <img src={MailIcon} alt='mailIcon' />
              <EmailSendMsg>인증이 실패하였습니다</EmailSendMsg>
              <EmailMsg>
                인증메일의 인증코드가 만료되었는지 확인해주세요. <br />
                만약 완료되었다면, 회원가입을 다시 시도해주세요.
              </EmailMsg>
              <Note>
                유의사항
                <p>
                  인증 메일은 발송 시점으로부터 5분 동안만 유효하며, 재발송 시
                  기존 인증코드는 만료됩니다. 반드시 마지막에 수신된 메일을
                  확인바랍니다.
                </p>
              </Note>
              <button onClick={() => navigate('/')}>메인으로</button>
            </VerifiedFalse>
          )}
          {isVerified === null && (
            <VerifiedNull>
              <img src={MailIcon} alt='mailIcon' />
              <EmailSendMsg>인증 메일이 발송되었습니다</EmailSendMsg>
              <EmailMsg>
                메일함에서 인증 메일을 확인 바랍니다. <br />
                이메일의 인증 버튼을 선택하면 회원가입이 완료됩니다.
              </EmailMsg>
              <Note>
                유의사항
                <p>
                  인증 메일은 발송 시점으로부터 5분 동안만 유효하며, 재발송 시
                  기존 인증코드는 만료됩니다. <br /> 반드시 마지막에 수신된
                  메일을 확인바랍니다.
                </p>
              </Note>
              <JoinAgain>이메일을 잘못 입력하셨나요?</JoinAgain>
              <button onClick={() => navigate('/join')}>
                다시 회원가입으로
              </button>
            </VerifiedNull>
          )}
        </EmailVerificationBox>
      </EmailVerificationWrap>
    </>
  );
};

const EmailVerificationWrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
const EmailVerificationBox = styled.div`
  margin-top: 80px;
  /* height: 600px; */
  width: 700px;
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
const VerifiedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 70px;
  }
  button {
    background-color: ${({ theme }) => theme.colors.BLUE};
    padding: 10px;
    height: 50px;
    border-radius: 10px;
    font-size: 24px;
    color: white;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;
const EmailTrue = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  p {
    margin-top: 30px;
    padding: 10px;
    font-weight: 600;
    font-size: 35px;
  }
`;
const VerifiedFalse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 80px;
    width: 80px;
    margin: 60px 0 30px 0;
  }
  button {
    background-color: ${({ theme }) => theme.colors.BLUE};
    padding: 10px;
    height: 50px;
    border-radius: 10px;
    font-size: 23px;
    color: white;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;
const VerifiedNull = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 80px;
    width: 80px;
    margin: 60px 0 30px 0;
  }
  button {
    background-color: ${({ theme }) => theme.colors.BLUE};
    padding: 10px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    color: white;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 30px;
  }
`;
const Note = styled.div`
  background-color: #f8f9fa;
  margin-top: 80px;
  height: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  p {
    font-size: 14px;
    width: 530px;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.INPUT_GRAY};
    line-height: 20px;
  }
`;
const EmailSendMsg = styled.p`
  font-size: 30px;
  margin-bottom: 30px;
`;
const EmailMsg = styled.p`
  font-size: 18px;
  width: 450px;
  padding-left: 30px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.INPUT_GRAY};
`;
const JoinAgain = styled.p`
  color: ${({ theme }) => theme.colors.INPUT_GRAY};
  margin-top: 40px;
`;
export default EmailVerification;
