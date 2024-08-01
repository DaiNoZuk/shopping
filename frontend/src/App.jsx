import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import './App.css';

function App() {
  return (
    <div  >
      <nav>
        <ul>
          <div className=' text-center bg-gradient-to-r from-cyan-500 to-blue-500 first:pt-0   ' >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
