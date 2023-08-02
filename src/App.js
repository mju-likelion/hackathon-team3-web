import Main from './pages/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import EducationSelect from './pages/Education/EducationSelect';
import BasicGame from './pages/Education/BasicGame';
import AdvancedGame from './pages/Education/AdvancedGame';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/education' element={<EducationSelect />} />
            <Route path='/education/basic' element={<BasicGame />} />
            <Route path='/education/advanced' element={<AdvancedGame />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
