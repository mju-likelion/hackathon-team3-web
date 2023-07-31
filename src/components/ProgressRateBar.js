import styled from 'styled-components';

const ProgressRateBar = ({ rate }) => {
  return (
    <BarBox>
      <RateTitle>진도율</RateTitle>
      <Bar_background>
        <Bar_value value={rate} />
      </Bar_background>
    </BarBox>
  );
};

const BarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const RateTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
`;
const Bar_background = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  background-color: #ededed;
  border-radius: 8px;
`;
const Bar_value = styled.div`
  position: absolute;
  width: ${({ value }) => value + `%`};
  height: 50px;
  top: 0;
  left: 0;
  background-color: #99ceff;
  border-radius: 8px 0 0 8px;
`;

export default ProgressRateBar;
