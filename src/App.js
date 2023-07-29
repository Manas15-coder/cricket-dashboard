import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';
import CountdownTimer from './components/CountdownTimer';
import Home from './components/Home';





function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/schedule' element={<Schedule/>} />
      </Routes>
      <CountdownTimer/>
    </>
  );
}

export default App;
