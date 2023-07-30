import Main from './pages/Main/Main';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EducationSelect from './pages/Education/EducationSelect';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/education' element={<EducationSelect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
