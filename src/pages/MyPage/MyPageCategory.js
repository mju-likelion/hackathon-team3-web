import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const MyPageCategory = ({ type }) => {
  const navigate = useNavigate();
  console.log(type);
  console.log(typeof type);
  return (
    <>
      <CategoryBox>
        <MyPageText>마이페이지</MyPageText>
        <MyPageLine />
        <CategoryEdu type={type} onClick={() => navigate('/mypage/education')}>
          학습현황
        </CategoryEdu>
        <CategoryAccount
          type={type}
          onClick={() => navigate('/mypage/account')}
        >
          내 계정
        </CategoryAccount>
      </CategoryBox>
    </>
  );
};

export default MyPageCategory;

const CategoryBox = styled.div`
  width: 228px;
  height: 769px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
`;

const MyPageText = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.BLUE};
  margin-top: 23px;
`;

const MyPageLine = styled.hr`
  width: 223px;
  height: 1px;
  border: 1px solid ${({ theme }) => theme.colors.BLUE};
  margin-top: 25px;
  margin-bottom: 0;
`;

const CategoryEdu = styled.button`
  font-size: 28px;
  margin-top: 38px;
  background: none;
  font-weight: 600;
  color: ${({ type, theme }) =>
    type === 'education' ? theme.colors.BLUE : theme.colors.TEXT_BLACK};
`;

const CategoryAccount = styled(CategoryEdu)`
  margin-top: 52px;
  color: ${({ type, theme }) =>
    type === 'account' ? theme.colors.BLUE : theme.colors.TEXT_BLACK};
`;
