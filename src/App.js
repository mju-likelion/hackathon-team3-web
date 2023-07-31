import Main from './pages/Main/Main';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EducationSelect from './pages/Education/EducationSelect';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Join from './pages/Join/Join';
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        {/* <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/education' element={<EducationSelect />} />
          </Routes>
        </BrowserRouter> */}
        <Join />
      </ThemeProvider>
    </>
  );
}

export default App;
