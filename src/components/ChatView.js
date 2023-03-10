import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectSelectedImage } from '../features/appSlice';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
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

      <div className="chatView__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={['#004777', '#f7b801', '#a30000']}
          colorsTime={[10, 6, 3]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }

            return remainingTime
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  )
}

export default ChatView
