import React from 'react'
import ReactTimeago from 'react-timeago';
import { StopRounded } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import '../styles/Chat.css';
import { selectImage } from '../features/appSlice';
import { useDispatch } from 'react-redux';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection('posts').doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );

      navigate('/chats/view');
    }
  };

  return (
    <div onClick={open} className='chat'>
      <Avatar className='chat__avatar' src={profilePic} />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>Tap to view - <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} /></p>
      </div>

      {!read && <StopRounded className='chat__readIcon' />}
    </div>
  )
}

export default Chat
