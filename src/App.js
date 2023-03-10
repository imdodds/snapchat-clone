import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Chats from './components/Chats';
import ChatView from './components/ChatView';
import Login from './components/Login';
import Preview from './components/Preview';
import WebcamCapture from './components/WebcamCapture';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase';


function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid
        }))
      } else {
        dispatch(logout())
      }
    })
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              className='app__logo'
              src="https://logos-world.net/wp-content/uploads/2020/04/Snapchat-Logo-700x394.png"
              alt=""
            />
            <div className='app__body'>
              <div className="app__bodyBackground">
                <Routes>
                  <Route path='/' element={<WebcamCapture />} />
                  <Route path='/preview' element={<Preview />} />
                  <Route path='/chats' element={<Chats />} />
                  <Route path='/chats/view' element={<ChatView />} />
                </Routes>
              </div>
            </div>
          </>
        )}

      </Router>
    </div>
  );
}

export default App;
