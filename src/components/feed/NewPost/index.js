import {Avatar} from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoCamIcon from '@material-ui/icons/Videocam';
import React, {useState} from 'react';

function NewPost() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(input)

    setInput('');
  };


  return (
    <div className="newPost">
      <div className="newPost__top">
        <Avatar/>
        <form>
          <input
            id="newPost"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="newPost__input"
            placeholder="What's on your mind,"
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
