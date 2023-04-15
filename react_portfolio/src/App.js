import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'


function App() {




  return (
    <div className="App">
      <Header />
    
      
      <Routes>
            
            
            <Route path="/About" element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Projects' element={<Projects/>} />
            <Route path='/Resume' element={<Resume/>} />
            
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
