import {Route, Routes } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Home from './Pages/Home/Home'
import MonthStatistics from './Pages/MonthStatistics/MonthStatistics'
import './Styles/index.scss'
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
