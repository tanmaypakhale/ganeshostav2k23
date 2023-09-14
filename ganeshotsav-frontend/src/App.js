import React from 'react';
import { BrowserRouter,  Route, Routes} from 'react-router-dom';
import Admin from './components/admin/Admin';
import MainPage from './components/donation/MainPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/admin' element={<Admin/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
