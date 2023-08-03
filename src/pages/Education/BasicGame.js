import styled from 'styled-components';
import SideBar from '../../components/SideBar';
import SquareButton from '../../components/SquareButton';
import Content from "../../components/Content";
import logout_icon from '../../assets/images/logout_icon.svg';
import next_icon from '../../assets/images/next_icon.svg';
import sideBarData from '../../assets/data/SideBar_DummyData.json';
import {useState} from "react";

const BasicGame = () => {
  const basicValue = 40;
    const [currentChapter, setCurrentChapter] = useState(1);
    const toggleChapter = (title) => {
        setCurrentChapter(title);
    };

    return (
    <PageContainer>
      <SideBar rate={basicValue} sideBarData={sideBarData} onClick={toggleChapter} currentChapter={currentChapter}/>
      <ContentWrapper>
        <Content currentChapter={currentChapter}/>
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
const ButtonWrapper = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export default BasicGame;
