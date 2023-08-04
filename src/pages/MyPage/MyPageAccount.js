import React from 'react';
import MyPageCategory from './MyPageCategory';
import styled from 'styled-components';
import Input from '../../components/Input';

const MyPageAccount = () => {
  return (
    <>
      <MyPageAccountBox>
        <MyPageCategory />
        <MyPageAcc>
          <ChangePasswordBox>
            <form>
              <InputBox>
                <ChangePasswordTitle>비밀번호 변경</ChangePasswordTitle>
                <PasswordBox>
                  <MyAccountText>기존 비밀번호</MyAccountText>
                  <PasswordInput />
                </PasswordBox>
                <PasswordBox>
                  <MyAccountText>변경 비밀번호</MyAccountText>
                  <PasswordInput />
                </PasswordBox>
                <PasswordBox>
                  <MyAccountText>비밀번호 확인</MyAccountText>
                  <PasswordInput />
                </PasswordBox>
              </InputBox>
              <ChangeButton>변경하기</ChangeButton>
            </form>
          </ChangePasswordBox>
          <QuitAccountBox>
            <AccountTitle>회원 탈퇴</AccountTitle>
            <QuitAccountText>
              탈퇴하시면 모든 진행상황이 영구적으로 삭제됩니다.
            </QuitAccountText>
            <QuitButton>탈퇴하기</QuitButton>
          </QuitAccountBox>
        </MyPageAcc>
      </MyPageAccountBox>
    </>
  );
};

export default MyPageAccount;

const MyPageAccountBox = styled.div`
  display: flex;
`;

const MyPageAcc = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChangePasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1052px;
  //background-color: mediumpurple;
`;

// const PasswordForm = styled.form``;

const AccountTitle = styled.h2`
  font-size: 32px;
`;

const ChangePasswordTitle = styled(AccountTitle)`
  margin: 91px 0 49px 0;
`;

const InputBox = styled.div`
  :last-child {
    margin-bottom: 0;
  }
`;

const PasswordBox = styled.div`
  //width: 209px;
  height: 43px;
  display: flex;
  font-size: 17px;
  align-items: center;
  margin-bottom: 16px;
`;

const MyAccountText = styled.p`
  font-size: 17px;
`;

const PasswordInput = styled.input`
  width: 260px;
  height: 38px;
  border: 1px solid black;
  border-radius: 8px;
  margin-left: 26px;
`;

const DoButton = styled.button`
  width: 139px;
  height: 45px;
  border-radius: 10px;
  font-size: 17px;
  border: none;
  color: white;
  font-weight: 600;
  margin-top: 28px;
  margin-left: 250px; // 다시 확인해야함
`;

const ChangeButton = styled(DoButton)`
  background-color: #27b141;
`;

const QuitButton = styled(DoButton)`
  background-color: #ff0000;
`;

const QuitAccountBox = styled(ChangePasswordBox)`
  margin-top: 109px;
`;

const QuitAccountText = styled(MyAccountText)`
  margin-top: 27px;
`;
