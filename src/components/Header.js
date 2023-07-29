import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <HeaderBar>안녕 나는 헤더</HeaderBar>
    </>
  );
};

export default Header;

const HeaderBar = styled.div`
  width: 1280px;
  height: 63px;
`;
