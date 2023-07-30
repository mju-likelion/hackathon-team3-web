import styled from 'styled-components';
import ProgressRateBar from '../../components/ProgressRateBar';

const EducationSelect = () => {
  const basicValue = 40;
  const advancedValue = 60;

  return (
    <PageContainer>
      <ContentContainer>
        <MenuContainer>
          <Circle>기초 학습 하기</Circle>
          <ProgressRateBar rate={basicValue} />
        </MenuContainer>
        <MenuContainer>
          <Circle>심화 학습 하기</Circle>
          <ProgressRateBar rate={advancedValue} />
        </MenuContainer>
      </ContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 1280px;
  height: 762px;
  border: 1px solid black;
  margin-top: 70px;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 150px;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;
const Circle = styled.div`
  width: 300px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  margin-left: 50px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  line-height: 300px;
  background-color: #bcdfff;
`;

export default EducationSelect;