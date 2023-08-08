import styled from 'styled-components';
import search_icon from '../../assets/images/search_icon.svg';
import SquareButton from '../../components/SquareButton';

const TypeFillBlank = () => {
  return (
    <FillBlankWrapper>
      <Form>
        <QuestionBox>
          <InputContainer>
            <QuestionText>기후변화</QuestionText>
            <AnswerInput placeHolder='정답' autoFocus />
            <QuestionText>nytimes.com</QuestionText>
          </InputContainer>
        </QuestionBox>

        <SearchBtn able={true} asset={search_icon} />
      </Form>
    </FillBlankWrapper>
  );
};

const FillBlankWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;
const QuestionBox = styled.div`
  width: 640px;
  height: 70px;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
`;
const InputContainer = styled.div`
  border-bottom: 5px solid ${({ theme }) => theme.colors.BLUE};
  display: flex;
  align-items: center;
  gap: 8px;
`;
const QuestionText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;
const AnswerInput = styled.input`
  // todo 정답에 비례한 width
  width: 70px;
  height: 35px;
  padding: 5px;
  border: none;
  font-size: 25px;
  font-weight: 600;
  line-height: 35px;
  background-color: ${({ theme }) => theme.colors.BG_LIGHTGRAY};
  &:focus {
    outline: none;
  }
`;
const SearchBtn = styled(SquareButton)``;

export default TypeFillBlank;
