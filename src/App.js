import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; 
import Report from './components/Report';
import Statistics from './components/Statistics';
import Donate from './components/Donate';
import Coins from './components/Coins';
import Community from './components/Community';

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/kintara-coin" element={<Coins />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </main>
    </Router>
   
  );
};

export default App;
