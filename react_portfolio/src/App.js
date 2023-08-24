import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Home from './components/Home'


function App() {




  return (
    <div className="App">
      
      <Header />
    
      
      <Routes>
            
            
            <Route path='/' element={<Home />} />
            <Route path="/About" element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Projects' element={<Projects/>} />
            
            
      </Routes>
   
    </div>
  );
}

export default App;
