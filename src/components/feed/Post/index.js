import {Avatar} from '@material-ui/core';
import {ExpandMoreOutlined} from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NearMeIcon from '@material-ui/icons/NearMe';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import React, {useState} from 'react';

function Post({profilePic, image, username, timestamp, message}) {
  // conditionally render dropdown affect based on this boolean
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="post">
      <div className="post__top">
        <div className="post__top-desc">
          <Avatar src={profilePic} className="post__avatar"/>
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p>Timestamp ....</p>
          </div>
        </div>
        <MoreHorizIcon className="post__top--icon" onClick={() => setOpenMenu(!openMenu)}/>

      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt=""/>
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon/>
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon/>
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon/>
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon/>
          <ExpandMoreOutlined/>
        </div>
      </div>
    </div>
  );
}

export default Post;
