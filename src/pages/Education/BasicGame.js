import styled from 'styled-components';
import SideBar from '../../components/SideBar';
import SquareButton from '../../components/SquareButton';
import logout_icon from '../../assets/images/logout_icon.svg';
import next_icon from '../../assets/images/next_icon.svg';
import sideBarData from '../../assets/data/SideBar_DummyData.json';

const BasicGame = () => {
  const basicValue = 40;

  return (
    <PageContainer>
      <SideBar rate={basicValue} sideBarData={sideBarData} />
      <ContentWrapper>
        <ContentContainer>
          <ChapterTitle>2. 정의 검색</ChapterTitle>
          <ContentBox>
            <ScenarioBox>
              <ScenarioText>
                멋사에 합격했다. 공부를 시작해보자! Git 이라는 것을 설치 해오는
                것이 과제이다. 그런데 Git이 뭐지?
              </ScenarioText>
            </ScenarioBox>
            <QuestionBox> → 검색 해야하는 키워드는 무엇일까?</QuestionBox>
            <SubmitBox />
          </ContentBox>
        </ContentContainer>
        <ButtonWrapper>
          <SquareButton able={true} asset={logout_icon} />
          <SquareButton able={true} asset={next_icon} />
        </ButtonWrapper>
      </ContentWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 1280px;
  height: 769px;
  display: flex;
`;
const ContentWrapper = styled.div`
  width: 1030px;
  height: 769px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;
const ContentContainer = styled.div`
  width: 890px;
`;
const ChapterTitle = styled.p`
  margin: 36px 0 20px 0;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
const ContentBox = styled.div`
  margin: 40px auto 0 auto;
  width: 880px;
  height: 500px;
  padding: 40px 70px;
  border-radius: 25px;
  background-color: #f1f8ff;
`;
const ScenarioBox = styled.div`
  width: 100%;
  height: 140px;
  padding: 10px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScenarioText = styled.p`
  color: #1e1e1e;
  font-size: 24px;
  font-weight: bold;
  line-height: 40px;
`;
const QuestionBox = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.BLUE};
  border-bottom: ${({ theme }) => theme.colors.BLUE} 5px dashed;
  font-size: 24px;
  font-weight: bold;
  line-height: 50px;
`;
const SubmitBox = styled.div``;
const ButtonWrapper = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export default BasicGame;
