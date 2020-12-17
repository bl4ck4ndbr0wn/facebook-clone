import {Avatar} from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoCamIcon from '@material-ui/icons/Videocam';
import React, {useState} from 'react';
import db from '../../../firebase';
import {useStateValue} from '../../../StateProvider';
import firebase from 'firebase'

function NewPost() {
  const [state, dispatch] = useStateValue();

  const [input, setInput] = useState('');
  const [inputURL, setInputURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: state.user.photoURL,
      username: state.user.displayName,
      image: inputURL
    })

    setInput('');
    setInputURL('');
  };


  return (
    <div className="newPost">
      <div className="newPost__top">
        <Avatar src={state.user.photoURL}/>
        <form>
          <input
            id="newPost"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="newPost__input"
            placeholder={`What's on your mind, ${state.user.displayName}`}
          />
          <input
            value={inputURL}
            onChange={(e) => setInputURL(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit"/>
        </form>
      </div>
      <div className="newPost__bottom">
        <div className="newPost__option">
          <VideoCamIcon style={{color: 'red'}}/>
          <span>Live Video</span>
        </div>
        <div className="newPost__option">
          <PhotoLibraryIcon style={{color: 'green'}}/>
          <span>Photo/Video</span>
        </div>
        <div className="newPost__option">
          <InsertEmoticonIcon style={{color: 'orange'}}/>
          <span>Feeling/Activity</span>
        </div>
      </div>
    </div>
  );
}

export default NewPost
