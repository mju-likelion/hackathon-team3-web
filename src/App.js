import Main from './pages/Main/Main';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from 'react-router-dom';
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
  let element = useRoutes([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: 'education',
          element: <EducationSelect />,
        },
        {
          path: 'education/basic',
          element: <Game type='basic' />,
        },
        {
          path: 'education/advanced',
          element: <Game type='advanced' />,
        },
        {
          path: 'join',
          element: <Join />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'mypage/education',
          element: <MyPageEducation />,
        },
        {
          path: 'mypage/account',
          element: <MyPageAccount />,
        },
        {
          path: 'complete',
          element: <Complete />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);
  // const [header, setHeader] = useRecoilState(HeaderAtom);
  // const showHeader = useRecoilValue(HeaderAtom);
  // const setShowHeader = useSetRecoilState(HeaderAtom);
  // const pathname = [
  //   '/',
  //   '/education',
  //   '/education/basic',
  //   '/education/advanced',
  //   '/join',
  //   '/login',
  //   '/mypage/education',
  //   '/mypage/account',
  //   'complete',
  // ];
  // const handleHeader = () => {
  //   // pathname에 없는 애면
  //   setShowHeader('false');
  // };
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {/*<BrowserRouter>*/}
      {headerController && <Header />}
      {element}
      {/*  /!*{header && <Header />}*!/*/}
      {/*  {headerController && <Header />}*/}
      {/*  <Routes>*/}
      {/*    <Route path='/' element={<Main />} />*/}
      {/*    <Route path='/education' element={<EducationSelect />} />*/}
      {/*    <Route path='/education/basic' element={<Game type='basic' />} />*/}
      {/*    <Route*/}
      {/*      path='/education/advanced'*/}
      {/*      element={<Game type='advanced' />}*/}
      {/*    />*/}
      {/*    <Route path='/join' element={<Join />} />*/}
      {/*    <Route path='/login' element={<Login />} />*/}
      {/*    <Route path='/mypage/education' element={<MyPageEducation />} />*/}
      {/*    <Route path='/mypage/account' element={<MyPageAccount />} />*/}
      {/*    <Route path='/complete' element={<Complete />} />*/}
      {/*    /!*<Route path='/*' element={<NotFound />} onChange={handleHeader} />*!/*/}
      {/*    <Route path='/*' element={<NotFound />} />*/}
      {/*  </Routes>*/}
      {/*</BrowserRouter>*/}
    </ThemeProvider>
  );
}

const headerController = () => {
  const location = useLocation();
  const headerControllerValue = useRecoilValue(HeaderAtom);
  const setHeaderController = useSetRecoilState(HeaderAtom);

  useEffect(() => {
    setHeaderController(location.pathname);
    console.log(headerControllerValue);
  }, [location]);

  return setHeaderController;
};
export default App;
