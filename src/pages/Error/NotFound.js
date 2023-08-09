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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`;
