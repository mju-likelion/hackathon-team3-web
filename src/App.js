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
import { useEffect, useState } from 'react';
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { HeaderAtom } from './assets/atom/HeaderAtom';

function App() {
  // const headerController = () => {
  const location = useLocation();
  const headerControllerValue = useRecoilValue(HeaderAtom);
  const setHeaderController = useSetRecoilState(HeaderAtom);

  useEffect(() => {
    setHeaderController(location.pathname); // 아톰값 업데이트 -> useRecoilValue 값 변경?
    console.log(headerControllerValue, typeof headerControllerValue); // 타입값 string
  }, [location]);

  //   return setHeaderController;
  // };

  // const [header, setHeader] = useRecoilState(HeaderAtom);
  // const showHeader = useRecoilValue(HeaderAtom);
  // const setShowHeader = useSetRecoilState(HeaderAtom);
  const pathname = [
    '/',
    '/education',
    '/education/basic',
    '/education/advanced',
    '/join',
    '/login',
    '/mypage/education',
    '/mypage/account',
    '/complete',
  ];

  // 근데 얘도 useEffect로 관리해야하나..?
  const handleHeader = () => {
    // some()은 배열 내의 적어도 하나의 요소가 제공된 함수를 통과하는지 테스트함. 참/거짓 반환
    if (pathname.some((path) => !headerControllerValue.includes(path)))
      return false;
  };

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {handleHeader && <Header />}
      {/*  /!*{header && <Header />}*!/*/}
      {/*  {headerController && <Header />}*/}
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
      </Routes>
    </ThemeProvider>
  );
}

export default App;
