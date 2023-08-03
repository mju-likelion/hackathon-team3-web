import styled from 'styled-components';
import ProgressRateBar from './ProgressRateBar';

const SideBar = ({ rate, sideBarData, onClick, currentChapter }) => {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <EducationTitle>기초 학습</EducationTitle>
      </SideBarHeader>
      <Hr />
      <Contents>
        {sideBarData.map((content) => {
          return (
            <Title
              key={content.id}
              complete={content.complete}
              onClick={() => onClick(content.id)}
              currentChapter={currentChapter}
              id={content.id}
            >
              {content.id}. {content.title}
            </Title>
          );
        })}
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
  box-shadow: 0 2px 1px rgba(37, 37, 37, 0.5);
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
  color: ${({ theme, complete, currentChapter, id }) => {
    if (complete) {
      if (id === currentChapter) return theme.colors.BLUE;
      else return `#1E1E1E`;
    } else return `#D3D3D3`;
  }};
  cursor: pointer;
  user-select: none;
`;
const RateBarContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 20px;
`;

export default SideBar;
