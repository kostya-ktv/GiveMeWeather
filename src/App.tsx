import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Route, Routes } from 'react-router-dom';
import Spinner from './Common/Spinner/Spinner';
import Header from './Layout/Header/Header';
import Home from './Pages/Home/Home'
import { getWeatherByCity_action } from './store/actions/daily-weather-actions';
import { DEFAULT_CITY, SPINNER_STOP, SPINNER_START } from './store/constants';
import { GlobalStateType } from './store/types/types';
import './Styles/index.scss'

const App = () => {
  const {isLoading} = useSelector((state:GlobalStateType) => state.spinner)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch({type: SPINNER_START})
      const city = localStorage.getItem('city')
      const {lat, lon} = city ? JSON.parse(city) : DEFAULT_CITY
      getWeatherByCity_action(lat, lon, dispatch)
    dispatch({type: SPINNER_STOP})
  },[])

  return (
  <>
    {isLoading && <Spinner/>}
    <div className='container'>
    
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
