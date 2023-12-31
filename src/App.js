import Main from './pages/Main/Main';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import EducationSelect from './pages/Education/EducationSelect';
import Game from './pages/Education/Game';
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import MyPageEducation from './pages/MyPage/MyPageEducation';
import MyPageAccount from './pages/MyPage/MyPageAccount';
import Complete from './pages/Education/Complete';
import NotFound from './pages/Error/NotFound';
import EmailVerification from './pages/Join/EmailVerification';
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/education' element={<EducationSelect />} />
        <Route path='/education/basic' element={<Game type='basic' />} />
        <Route path='/education/advanced' element={<Game type='advanced' />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mypage/education' element={<MyPageEducation />} />
        <Route path='/mypage/account' element={<MyPageAccount />} />
        <Route path='/complete' element={<Complete />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/email-verification' element={<EmailVerification />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
