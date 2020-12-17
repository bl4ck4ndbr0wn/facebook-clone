import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlagIcon from '@material-ui/icons/Flag';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCirceIcon from '@material-ui/icons/SupervisedUserCircle';
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""/>
        <div className="header__input">
          <SearchIcon/>
          <input placeholder="Search Facebook" type="text"/>
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large"/>
        </div>
        <div className="header__option">
          <SupervisedUserCirceIcon fontSize="large"/>
        </div>
      </div>

      <div className="header__right"> <div className="header__info">
        <Avatar/>
        <h4>User Name</h4>
      </div>
        <IconButton>
          <AddIcon/>
        </IconButton>
        <IconButton>
          <ForumIcon/>
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
          <ExpandMoreIcon/>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
