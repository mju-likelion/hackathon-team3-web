import styled from 'styled-components';
import ProgressRateBar from './ProgressRateBar';

const SideBar = ({ title, sideBarData, onClick, currentChapter }) => {
  // 진도율 API로부터 받아온 값
  const basicValue = 40;

  return (
    <SideBarContainer>
      <SideBarHeader>
        <EducationTitle>{title}</EducationTitle>
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
          text_size={18}
          width={150}
          height={25}
          rate={basicValue}
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
  color: ${({ theme }) => theme.colors.LIGHTGRAY};
`;
const Contents = styled.div`
  white-space: normal;
`;
const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 35px;
  color: ${({ theme, complete, currentChapter, id }) => {
    if (complete) {
      if (id === currentChapter) return theme.colors.BLUE;
      else return theme.colors.TEXT_BLACK;
    } else return theme.colors.LIGHTGRAY;
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
