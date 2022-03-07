import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Header from './layout/Header/Header';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/month-statistics' element={<MonthStatistics/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
