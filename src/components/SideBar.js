import styled from 'styled-components';
import ProgressRateBar from './ProgressRateBar';

const SideBar = ({ title, sideBarData, onClick, currentChapterId, rate }) => {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <EducationTitle>{title}</EducationTitle>
      </SideBarHeader>
      <Hr />
      <Contents>
        {sideBarData &&
          sideBarData.map((content, index) => {
            return (
              <Title
                key={content.id}
                disabled={content.isCompleted}
                onClick={() => onClick(content.id)}
                currentChapterId={currentChapterId}
                id={content.id}
              >
                {index + 1}. {content.title}
              </Title>
            );
          })}
      </Contents>
      <RateBarContainer>
        <ProgressRateBar text_size={18} width={150} height={25} rate={rate} />
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
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const Title = styled.button`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 35px;
  color: ${({ theme, disabled, currentChapterId, id }) => {
    if (!disabled) {
      if (id === currentChapterId) return theme.colors.BLUE;
      else return theme.colors.TEXT_BLACK;
    } else return theme.colors.LIGHTGRAY;
  }};
  cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};
  user-select: none;
  background-color: transparent;
  letter-spacing: -1px;
`;
const RateBarContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 20px;
`;

export default SideBar;
