import styled from 'styled-components';
import BackgroundImage from '../../assets/images/NotFound.png';

const NotFound = () => {
  return <BackgroundImg />;
};

export default NotFound;

const BackgroundImg = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  position: absolute;
  width: 1280px;
  height: 832px;
  overflow: auto;
`;
