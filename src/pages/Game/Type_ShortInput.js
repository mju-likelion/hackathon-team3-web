import styled from 'styled-components';
import SquareButton from '../../components/SquareButton';
import search_icon from '../../assets/images/search_icon.svg';

const TypeShortInput = () => {
  return (
    <InputWrapper>
      <Form>
        <InputContainer>
          <AnswerInput placeHolder='검색어를 입력하세요' />
        </InputContainer>
        <SearchBtn able={true} asset={search_icon} />
      </Form>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;
const InputContainer = styled.div`
  width: 640px;
  height: 70px;
  padding: 0 20px;
  border-radius: 8px;
  background-color: white;
`;
const AnswerInput = styled.input`
  margin: 5px 0;
  width: 600px;
  height: 50px;
  border: none;
  border-bottom: 5px solid ${({ theme }) => theme.colors.BLUE};
  font-size: 25px;
  font-weight: 600;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled(SquareButton)``;

export default TypeShortInput;
