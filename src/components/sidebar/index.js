import {Avatar} from '@material-ui/core';
import {ExpandMoreOutlined} from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import React from 'react';
import {useStateValue} from '../../StateProvider';

const SidebarRow = ({src, Icon, title, className = ''}) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src}/>}
      {Icon && <Icon className={className}/>}

      <h4>{title}</h4>
    </div>
  );
}

const Sidebar = () => {
  const [state] = useStateValue();

  return (
    <div className="sidebar">
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
