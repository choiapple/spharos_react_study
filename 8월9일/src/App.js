import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Header from './Header';
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;