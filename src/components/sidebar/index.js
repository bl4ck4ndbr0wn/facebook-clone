import {Avatar} from '@material-ui/core';
import {ExpandMoreOutlined} from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import React from 'react';
import {useStateValue} from '../../StateProvider';

const SidebarRow = ({src, Icon, title, link, className = '',linkClassName}) => {
  return (
    // <div className={`sidebarRow ${linkClassName}`}>
      <div className="sidebarRow" id={linkClassName}>
      {src && <Avatar src={src}/>}
      {Icon && <Icon className={className}/>}

      {title && <h4>{title}</h4>}
      {link && <h4><a href={link}>Link to Repository</a></h4>}
    </div>
  );
}

const Sidebar = () => {
  const [state] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow
        Icon={GitHubIcon}
        link="https://github.com/bl4ck4ndbr0wn/facebook-clone"
        linkClassName="sidebar__row--important"
      />
      <SidebarRow
        src={state.user.photoURL}
        title={state.user.displayName}
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="See more" className="sidebar__row--icon"/>
    </div>
  )

}

export default Sidebar;
