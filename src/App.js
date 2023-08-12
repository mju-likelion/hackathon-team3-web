import Main from './pages/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import EducationSelect from './pages/Education/EducationSelect';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import EducationSelect from './pages/Education/EducationSelect';
import BasicGame from './pages/Education/BasicGame';
import AdvancedGame from './pages/Education/AdvancedGame';
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import MyPageEducation from './pages/MyPage/MyPageEducation';
import MyPageAccount from './pages/MyPage/MyPageAccount';
import NotFound from './pages/Error/NotFound';
import { CookiesProvider } from 'react-cookie';
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
            <Route path='/education/basic' element={<BasicGame />} />
            <Route path='/education/advanced' element={<AdvancedGame />} />
            <Route path='/join' element={<Join />} />
            <Route path='/login' element={<Login />} />
            <Route path='/mypage/education' element={<MyPageEducation />} />
            <Route path='/mypage/account' element={<MyPageAccount />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
