import styled from 'styled-components';

const HelpModal = ({ isModal, helpMsg }) => {
  return <ModalWrapper isVisible={isModal}>{helpMsg}</ModalWrapper>;
};

const ModalWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: white;
  border: ${({ theme }) => theme.colors.YELLOW} 8px dashed;
  border-radius: 25px;
  font-size: 20px;
  line-height: 30px;
  word-break: normal;
  padding: 20px;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
  display: ${({ isVisible }) => (isVisible ? `visible` : `hidden`)};
`;
export default HelpModal;