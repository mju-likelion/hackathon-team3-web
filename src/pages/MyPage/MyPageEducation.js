import MyPageCategory from './MyPageCategory';
import styled from 'styled-components';
import ProgressRateBar from '../../components/ProgressRateBar';
import { useEffect, useState } from 'react';
import { GetRate } from '../../api/GetRate';
import { GetUserInfo } from '../../api/GetUserInfo';
import { useNavigate } from 'react-router-dom';

const MyPageEducation = () => {
  const [rateBasic, setRateBasic] = useState(null);
  const [rateAdvanced, setRateAdvanced] = useState(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    GetRate(0, (res) => setRateBasic(res.data.progress));
    GetRate(1, (res) => setRateAdvanced(res.data.progress));
  }, []);
  useEffect(() => {
    GetUserInfo((res) => setUserName(res.data.user.nickname));
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <MyPageEduBox>
        <MyPageCategory type={'education'} />
        <MyPageEdu>
          <MyPageEduTitle>{userName}님의 학습현황</MyPageEduTitle>
          <BlackHr />
          <BasicEduTitle>기초학습</BasicEduTitle>
          <EduBundle>
            <Progressing>
              <ProgressRateBar
                text_size='24'
                width='315'
                height='41'
                rate={rateBasic}
              />
            </Progressing>
            <EduBtn onClick={() => navigate(`/education/basic`)}>
              이어서 학습하기 &#62;
            </EduBtn>
          </EduBundle>
          <GrayHr />
          <BasicEduTitle>심화학습</BasicEduTitle>
          <EduBundle>
            <Progressing>
              <ProgressRateBar
                className='ratebar'
                text_size='24'
                width='315'
                height='41'
                rate={rateAdvanced}
              />
            </Progressing>
            <EduBtn onClick={() => navigate(`/education/advanced`)}>
              이어서 학습하기 &#62;
            </EduBtn>
          </EduBundle>
        </MyPageEdu>
      </MyPageEduBox>
    </>
  );
};

export default MyPageEducation;

const MyPageEduBox = styled.div`
  display: flex;
`;

const MyPageEdu = styled.div`
  display: flex;
  width: 1052px;
  flex-direction: column;
`;

const MyPageEduTitle = styled.h2`
  font-size: 25px;
  font-weight: 500;
  margin: 17px 0 13px 20px;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;

const BlackHr = styled.hr`
  width: 988px;
  margin-left: 20px;
  border: 1px solid ${({ theme }) => theme.colors.TEXT_BLACK};
`;

const BasicEduTitle = styled.h3`
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
  font-size: 26px;
  margin: 40px 0 0 38px;
`;

const EduBundle = styled.div`
  display: flex;
  padding: 49px 0 37px 40px;
  align-items: center;
`;

const Progressing = styled.div`
  width: 450px;
`;

const EduBtn = styled.button`
  width: 167px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.BTN_ABLE};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 49px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;

const GrayHr = styled.hr`
  width: 988px;
  border: 1px solid ${({ theme }) => theme.colors.LIGHTGRAY};
  margin: 0 0 0 18px;
`;
