import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import Header from './components/Header'
import React from "react"
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
      
      <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/Header" element={<Header/>}/>
            <Route path="/Footer" element={<Footer/>} />
            <Route path="/About" element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Experience' element={<Experience/>} />
            <Route path='/Projects' element={<Projects/>} />
            <Route path='/Resume' element={<Resume/>} />
            
      </Routes>

    </div>
  );
}

export default App;
