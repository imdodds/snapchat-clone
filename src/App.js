import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WebcamCapture from './components/WebcamCapture';


function App() {
  return (
    <div className="app">
      <Router>
        <div className='app__body'>
          <Routes>
            <Route path='/' element={<WebcamCapture />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
