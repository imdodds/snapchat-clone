import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectSelectedImage } from '../features/appSlice';
import '../styles/ChatView.css';

function ChatView() {

  const selectedImage = useSelector(selectSelectedImage);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  }, [selectedImage])

  const exit = () => {
    navigate('/chats');
  }

  return (
    <div className='chatView'>
      <img src={selectedImage} onClick={exit} alt="" />
    </div>
  )
}

export default ChatView
