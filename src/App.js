import Main from './pages/Main/Main';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EducationSelect from './pages/Education/EducationSelect';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import MyPage from './pages/MyPage/MyPage';
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/education' element={<EducationSelect />} />
            <Route path='/join' element={<Join />} />
            <Route path='/login' element={<Login />} />
            <Route path='/mypage' element={<MyPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
