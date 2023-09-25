import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import SparklingHomes from './components/pages/SparklingHomes';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import BookNow from './components/pages/BookNow';
import AboutUs from './components/pages/AboutUS';
import SignIn from './components/pages/SignIn';
import Register from './components/pages/Register'
import Footer from './components/Footer';
import Views from './components/pages/Views';


function App() {
  return (
    <>
  <div className='page-container'>
  <Router>
    
    <Navbar/>
    
      <Routes>
        <Route path='/' element={<SparklingHomes/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/book-now' element={<BookNow/>} />
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/views' element={<Views/>}/>
      </Routes>
    </Router>
  <Footer/>
  </div>
  </>
  );
}

export default App;
