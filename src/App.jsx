import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';


function App() {


  return (
    <>
      <BrowserRouter>
  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:id" element={<About/>} />
          </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App
