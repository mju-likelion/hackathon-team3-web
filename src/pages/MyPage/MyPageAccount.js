import MyPageCategory from './MyPageCategory';
import styled from 'styled-components';
import ChangePassword from './ChangePassword';
import { DeleteUser } from '../../api/DeleteUser';
import { useNavigate } from 'react-router-dom';

const MyPageAccount = () => {
  const navigate = useNavigate();
  const callbackFunction = () => {
    console.log('Delete UserInfo!');
    alert('탈퇴되었습니다.');
    navigate(`/`);
  };

  const deleteUserInfo = () => {
    console.log('deleteUserInfo 클릭');
    DeleteUser(accessToken, callbackFunction);
  };

  return (
    <>
      <MyPageAccountBox>
        <MyPageCategory type={1} />
        <MyPageAcc>
          <ChangePasswordBox>
            <ChangePassword />
          </ChangePasswordBox>
          <QuitAccountBox>
            <AccountTitle>회원 탈퇴</AccountTitle>
            <QuitAccountText>
              탈퇴하시면 모든 진행상황이 영구적으로 삭제됩니다.
            </QuitAccountText>
            <QuitButton onClick={deleteUserInfo}>탈퇴하기</QuitButton>
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
`;

const AccountTitle = styled.h2`
  font-size: 32px;
`;

const MyAccountText = styled.p`
  font-size: 17px;
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

const QuitButton = styled(DoButton)`
  background-color: #ff0000;
`;

const QuitAccountBox = styled(ChangePasswordBox)`
  margin-top: 109px;
`;

const QuitAccountText = styled(MyAccountText)`
  margin-top: 27px;
`;
