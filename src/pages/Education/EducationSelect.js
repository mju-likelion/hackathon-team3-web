import styled from 'styled-components';
import ProgressRateBar from '../../components/ProgressRateBar';
import { useNavigate } from 'react-router-dom';
import CircleButton from '../../components/CircleButton';

const EducationSelect = () => {
  const basicValue = 40;
  const advancedValue = 60;
  const navigate = useNavigate();

  return (
    <PageContainer>
      <ContentContainer>
        <MenuContainer>
          <CircleBtn
            onClick={() => navigate('/education/basic')}
            value='기초 학습 하기'
          />
          <ProgressRateBar
            text_size={30}
            width={300}
            height={50}
            rate={basicValue}
          />
        </MenuContainer>
        <MenuContainer>
          <CircleBtn
            onClick={() => navigate('/education/advanced')}
            value='심화 학습 하기'
          />
          <ProgressRateBar
            text_size={30}
            width={300}
            height={50}
            rate={advancedValue}
          />
        </MenuContainer>
      </ContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 1280px;
  height: 769px;
  border: 1px solid black;
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
  gap: 60px;
`;
const CircleBtn = styled(CircleButton)`
  margin-left: 50px;
`;
export default EducationSelect;
