import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Chats from './components/Chats';
import ChatView from './components/ChatView';
import Preview from './components/Preview';
import WebcamCapture from './components/WebcamCapture';


function App() {
  return (
    <div className="app">
      <Router>
        <div className='app__body'>
          <Routes>
            <Route path='/' element={<WebcamCapture />} />
            <Route path='/preview' element={<Preview />} />
            <Route path='/chats' element={<Chats />} />
            <Route path='/chats/view' element={<ChatView />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
