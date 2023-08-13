import styled from 'styled-components';
import ProgressRateBar from './ProgressRateBar';
import { useEffect, useState } from 'react';

const SideBar = ({ title, sideBarData, onClick, currentChapterId, rate }) => {
  const [ableChapterIndex, setAbleChapterIndex] = useState(0);

  useEffect(() => {
    // isCompleted: true 값을 가지는 마지막 챕터의 다음 챕터 -> 접근 가능한 챕터
    const reversedData = [...sideBarData].reverse(); // 배열을 역순으로 복사: sideBarData가 객체 배열 이므로 lastIndexOf 메소드 사용 불가
    const lastCompletedIndex = reversedData.length - 1 - reversedData.findIndex((chapter) => chapter.isCompleted); // 원래 배열의 인덱스로 조정
    setAbleChapterIndex(lastCompletedIndex + 1);
  }, [sideBarData, currentChapterId]);

  return (
    <SideBarContainer>
      <SideBarHeader>
        <EducationTitle>{title}</EducationTitle>
      </SideBarHeader>
      <Hr />
      <Contents>
        {sideBarData &&
          sideBarData.map((content, index) => {
            console.log(ableChapterIndex);
            console.log(content.isCompleted);

            return (
              <Title
                key={content.id}
                disabled={!content.isCompleted && index !== ableChapterIndex}
                ableChapterIndex={ableChapterIndex}
                currentChapterId={currentChapterId}
                onClick={() => onClick(content.id)}
                id={content.id}
                index={index}
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
  color: ${({
              theme,
              disabled,
              ableChapterIndex,
              currentChapterId,
              id,
              index,
            }) => {
    if (!disabled) {
      if (id === currentChapterId) return theme.colors.BLUE;
      else if (index === ableChapterIndex) return theme.colors.TEXT_BLACK;
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
