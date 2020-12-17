import {Avatar} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FlagIcon from '@material-ui/icons/Flag';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCirceIcon from '@material-ui/icons/SupervisedUserCircle';
import React from 'react';
import {useStateValue} from '../../StateProvider';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import Navbar from './Navbar/Navbar';
import NavItem from './NavItem/NavItem';

const Header = () => {
  const [state] = useStateValue();
console.log(state)
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

      <div className="header__right">
        <div className="header__info">
          <Avatar src={state.user.photoURL}/>
          <h4>{state.user.displayName}</h4>
        </div>
        <Navbar>
          <NavItem to="#newPost" Icon={AddIcon}/>
          <NavItem Icon={ForumIcon}/>
          <NavItem Icon={NotificationsIcon}/>
          <NavItem Icon={ArrowDropDownIcon}>
            <DropdownMenu/>
          </NavItem>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
