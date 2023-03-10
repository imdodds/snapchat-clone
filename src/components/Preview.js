import React, { useEffect } from 'react'
import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, TextFields, TimerOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetCameraImage, selectCameraImage } from '../features/cameraSlice';
import { v4 as uuid } from 'uuid';
import firebase from 'firebase/compat/app';
import { db, storage } from '../firebase';
import '../styles/Preview.css';
import { selectUser } from '../features/appSlice';


function Preview() {

  const cameraImage = useSelector(selectCameraImage);

  const user = useSelector(selectUser);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!cameraImage) {
      navigate('/');
    }
  }, [cameraImage, navigate]);

  const closePreview = () => {
    dispatch(resetCameraImage());
  }

  const sendPost = () => {

    const id = uuid();
    const uploadTask = storage
      .ref(`posts/${id}`)
      .putString(cameraImage, 'data_url');

    uploadTask.on(
      'state_changed',
      null,
      (error) => {
        // ERROR function
        console.log(error)
      },
      () => {
        // COMPLETE function
        storage
          .ref('posts')
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection('posts').add({
              imageUrl: url,
              username: 'Ian',
              read: false,
              profilePic: user.profilePic,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            navigate('/chats');
        });
      }
    );
  };

  return (
    <div className='preview'>
      <Close
        onClick={closePreview}
        className='preview__close'
      />
      <div className="preview__toolbarRight">
        <TextFields />
        <Create />
        <Note />
        <MusicNote />
        <AttachFile />
        <Crop />
        <TimerOutlined />
      </div>
      <img src={cameraImage} alt='' />
      <div onClick={sendPost} className="preview__footer">
        <h2>Send Now</h2>
        <Send
          fontSize='small'
          className='preview__sendIcon'
        />
      </div>
    </div>
  )
}

export default Preview
