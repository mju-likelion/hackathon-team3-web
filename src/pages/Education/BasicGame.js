import styled from 'styled-components';
import SideBar from '../../components/SideBar';

const BasicGame = () => {
  const basicValue = 40;

  return (
    <PageContainer>
      <SideBar rate={basicValue} />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 1280px;
  height: 769px;
  border: 1px solid black;
`;
export default BasicGame;
