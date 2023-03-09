import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import { RadioButtonUncheckedOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setCameraImage } from '../features/cameraSlice';

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: 'user',
};

function WebcamCapture() {

  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
  }, [webcamRef])

  return (
    <div className='webcamCapture'>
      <Webcam
        audio={false}
        height={videoConstraints.height}
        width={videoConstraints.width}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        videoConstraints={videoConstraints}
      />

      <RadioButtonUncheckedOutlined
        className='webcamCapture__button'
        onClick={capture}
      />
    </div>
  )
}

export default WebcamCapture
