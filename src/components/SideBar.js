import styled from 'styled-components';
import ProgressRateBar from './ProgressRateBar';

const SideBar = ({ rate }) => {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <EducationTitle>기초 학습</EducationTitle>
      </SideBarHeader>
      <Hr />
      <Contents>
        <Title>1. 키워드 도출</Title>
        <Title>2. 정의 검색</Title>
        <Title>3. 키워드 조합</Title>
        <Title>4. 날씨</Title>
        <Title>5. 사전</Title>
        <Title>6. 계산</Title>
        <Title>7. 단위변환</Title>
        <Title>8. 스포츠</Title>
        <Title>9. 요약 정보</Title>
      </Contents>
      <RateBarContainer>
        <ProgressRateBar
          className='RateBar'
          text_size={18}
          width={150}
          height={25}
          rate={rate}
        />
      </RateBarContainer>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  width: 250px;
  height: 769px;
  padding: 20px;
  border: 1px solid black;
  position: relative;
`;
const SideBarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EducationTitle = styled.div`
  margin: 5px 0 25px 0;
  font-size: 25px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.BLUE};
  align-self: center;
`;
const Hr = styled.hr`
  width: 200px;
`;
const Contents = styled.div`
  padding: 15px;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 35px;
`;
const RateBarContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 20px;
`;

export default SideBar;
