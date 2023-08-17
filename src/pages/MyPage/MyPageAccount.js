import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { DeleteUser } from '../../api/DeleteUser';
import MyPageCategory from './MyPageCategory';
import ChangePassword from './ChangePassword';

const MyPageAccount = () => {
  const navigate = useNavigate();
  const callbackFunction = () => {
    alert('탈퇴되었습니다.');
    navigate(`/`);
  };
  const deleteUserCheck = () => {
    if (confirm('정말로 탈퇴하시겠습니까?') === true) {
      window.localStorage.setItem('loginState', false);
      DeleteUser(callbackFunction);
    } else return false;
  };

  return (
    <MyPageAccountBox>
      <MyPageCategory type={'account'} />
      <MyPageAcc>
        <ChangePasswordBox>
          <ChangePassword />
        </ChangePasswordBox>
        <QuitAccountBox>
          <AccountTitle>회원 탈퇴</AccountTitle>
          <QuitAccountText>
            탈퇴하시면 모든 진행상황이 영구적으로 삭제됩니다.
          </QuitAccountText>
          <QuitButton onClick={deleteUserCheck}>탈퇴하기</QuitButton>
        </QuitAccountBox>
      </MyPageAcc>
    </MyPageAccountBox>
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
  font-size: 35px;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;
const DoButton = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 10px;
  font-size: 25px;
  border: none;
  color: white;
  font-weight: 600;
  margin-top: 40px;
`;
const QuitButton = styled(DoButton)`
  background-color: ${({ theme }) => theme.colors.RED};
`;
const QuitAccountBox = styled(ChangePasswordBox)`
  margin-top: 90px;
`;
const QuitAccountText = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
  margin-top: 45px;
`;
