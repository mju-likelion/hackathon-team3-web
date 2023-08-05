import styled from 'styled-components';

const ProgressRateBar = ({ text_size, width, height, rate, ...attrProps }) => {
  return (
    <BarBox {...attrProps}>
      <RateTitle text_size={text_size}>진도율</RateTitle>
      <Bar_background width={width} height={height}>
        <Bar_value height={height} value={rate} />
      </Bar_background>
    </BarBox>
  );
};

const BarBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const RateTitle = styled.p`
  font-size: ${({ text_size }) => text_size}px;
  font-weight: bold;
  white-space: nowrap;
`;
const Bar_background = styled.div`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: #ededed;
  border-radius: 8px;
  overflow: hidden;
`;
const Bar_value = styled.div`
  position: absolute;
  width: ${({ value }) => value + `%`};
  height: ${({ height }) => height}px;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.BLUE};
  border-radius: 8px 0 0 8px;
`;

export default ProgressRateBar;
