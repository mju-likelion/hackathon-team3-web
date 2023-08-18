import styled from 'styled-components';
import Wave_SVG from '../../components/Main/WaveSVG';
import { useNavigate } from 'react-router-dom';

const Complete = () => {
  const navigate = useNavigate();
  return (
    <CompletePageWrapper>
      <MsgBox>
        <MsgTxt>
          학습을 모두 마치셨습니다! <br />
          이제 드넓은 정보의 바다에서 <br />
          자유롭게 <Blue>써핑</Blue>하러 떠나볼까요?
        </MsgTxt>
      </MsgBox>
      <BtnBox onClick={() => navigate('/')}>
        <Txt>메인페이지로</Txt>
      </BtnBox>
      <Wave />
    </CompletePageWrapper>
  );
};

const CompletePageWrapper = styled.div`
  width: 1280px;
  height: 730px;
`;
const MsgBox = styled.div`
  width: 100%;
  margin-top: 80px;
`;
const MsgTxt = styled.p`
  font-size: 40px;
  font-weight: bold;
  line-height: 70px;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
  text-align: center;
`;
const Blue = styled.p`
  color: ${({ theme }) => theme.colors.BLUE};
  display: inline;
`;
const BtnBox = styled.button`
  display: block;
  width: 250px;
  height: 70px;
  margin: 40px auto 0 auto;
  padding: 10px 20px 10px 20px;
  background-color: ${({ theme }) => theme.colors.BLUE};
  box-shadow: 0 0 1px ${({ theme }) => theme.colors.PLACEHOLDER};
  border-radius: 15px;
`;
const Txt = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
const Wave = styled(Wave_SVG)`
  width: 1280px;
`;

export default Complete;
