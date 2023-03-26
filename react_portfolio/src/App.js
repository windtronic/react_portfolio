import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import Header from './components/Header'
import React from "react"
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Projects from './Projects'
import Resume from './Resume'

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
