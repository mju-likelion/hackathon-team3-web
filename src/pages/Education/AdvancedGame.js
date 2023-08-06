import styled from 'styled-components';
import SideBar from '../../components/SideBar';
import sideBarData from '../../assets/data/SideBar_DummyData_Advanced.json';
import { useEffect, useState } from 'react';
import SquareButton from '../../components/SquareButton';
import Content from '../../components/Content';
import logout_icon from '../../assets/images/logout_icon.svg';
import next_icon from '../../assets/images/next_icon.svg';
import { useNavigate } from 'react-router-dom';

const AdvancedGame = () => {
  const navigate = useNavigate();
  const [currentChapter, setCurrentChapter] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    // todo 이 때 currentChapter는 id값 X, index 값이 되어야 함
    // 현재 더미데이터에서 각 챕터 id값 === index+1
    // todo 해당 chapter의 문제를 요청할 때는 currentChapter의 id값이 필요
    setIsLastPage(currentChapter === sideBarData.length);
  }, [isLastPage, currentChapter]);

  const toggleChapter = (title) => {
    setCurrentChapter(title);
  };

  return (
    <PageContainer>
      <SideBar
        title='심화 학습'
        sideBarData={sideBarData}
        onClick={toggleChapter}
        currentChapter={currentChapter}
      />
      <ContentWrapper>
        <Content currentChapter={currentChapter} />
        <ButtonWrapper>
          <SquareButton
            able={true}
            asset={logout_icon}
            onClick={() => navigate('/education')}
          />
          <NextBtn
            able={true}
            asset={next_icon}
            onClick={() => setCurrentChapter(currentChapter + 1)}
            isLastPage={isLastPage}
          />
        </ButtonWrapper>
      </ContentWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 1280px;
  height: 769px;
  display: flex;
  border: 1px solid black;
`;
const ContentWrapper = styled.div`
  width: 1030px;
  height: 769px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
const NextBtn = styled(SquareButton)`
  visibility: ${({ isLastPage }) => (isLastPage ? `hidden` : `visible`)};
`;

export default AdvancedGame;
