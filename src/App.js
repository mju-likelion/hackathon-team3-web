import Main from './pages/Main/Main';
import React from 'react';

import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
