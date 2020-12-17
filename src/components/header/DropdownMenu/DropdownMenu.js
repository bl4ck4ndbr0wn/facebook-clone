import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import LanguageIcon from '@material-ui/icons/Language';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SettingsIcon from '@material-ui/icons/Settings';
import React, {useEffect, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{height: menuHeight}} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            leftIcon={<AccountCircleIcon/>}
          >Full Name</DropdownItem>
          <DropdownItem
            leftIcon={<SettingsIcon/>}
            rightIcon={<ArrowForwardIosIcon/>}
            goToMenu="settings">
            Settings & privacy
          </DropdownItem>
          <DropdownItem
            leftIcon={<HelpIcon/>}
            rightIcon={<ArrowForwardIosIcon/>}
            goToMenu="help">
            Help & support
          </DropdownItem>

          <DropdownItem
            leftIcon={<MeetingRoomIcon/>}
          >Log Out</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowBackIcon/>}>
            <h2>Settings & privacy</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon/>}>Settings</DropdownItem>
          <DropdownItem leftIcon={<LockIcon/>}>Privacy checkup</DropdownItem>
          <DropdownItem leftIcon={<FormatListBulletedIcon/>}>Activity log</DropdownItem>
          <DropdownItem leftIcon={<LanguageIcon/>}>Language</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'help'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowBackIcon/>}>
            <h2>Help & Support</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<HelpIcon/>}>Help Center</DropdownItem>
          <DropdownItem leftIcon={<MailIcon/>}>Support Inbox</DropdownItem>
          <DropdownItem leftIcon={<InfoIcon/>}>Report a problem</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
