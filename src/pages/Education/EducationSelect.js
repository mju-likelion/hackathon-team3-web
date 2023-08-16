import styled from 'styled-components';
import ProgressRateBar from '../../components/ProgressRateBar';
import { useNavigate } from 'react-router-dom';
import CircleButton from '../../components/CircleButton';
import { GetRate } from '../../api/GetRate';
import { useEffect, useState } from 'react';

const EducationSelect = () => {
  const navigate = useNavigate();
  const [rateBasic, setRateBasic] = useState(0);
  const [rateAdvanced, setRateAdvanced] = useState(0);
  const loginState = JSON.parse(localStorage.getItem('loginState'));

  const onClickBasic = () => {
    if (loginState === false) {
      alert('로그인이 필요합니다.');
      navigate('/login');
    } else navigate('/education/basic');
  };

  const onClickAdvanced = () => {
    if (loginState === false) {
      alert('로그인이 필요합니다.');
      navigate('/login');
    } else navigate('/education/advanced');
  };

  useEffect(() => {
    GetRate(0, (res) => setRateBasic(res.data.progress));
    GetRate(1, (res) => setRateAdvanced(res.data.progress));
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <MenuContainer>
          <CircleBtn onClick={onClickBasic} value='기초 학습 하기' />
          <ProgressRateBar
            text_size={30}
            width={300}
            height={50}
            rate={rateBasic}
          />
        </MenuContainer>
        <MenuContainer>
          <CircleBtn onClick={onClickAdvanced} value='심화 학습 하기' />
          <ProgressRateBar
            text_size={30}
            width={300}
            height={50}
            rate={rateAdvanced}
          />
        </MenuContainer>
      </ContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 1280px;
  height: 769px;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 150px;
`;
const MenuContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
`;
const CircleBtn = styled(CircleButton)`
  margin-left: 55px;
`;
export default EducationSelect;
