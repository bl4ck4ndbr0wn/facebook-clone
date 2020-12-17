import {Avatar} from '@material-ui/core';
import {ExpandMoreOutlined} from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import React from 'react';

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

  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/64861711_474700469740434_5903317443228467200_n.jpg?_nc_cat=105&ccb=2&_nc_sid=dbb9e7&_nc_eui2=AeGH97KR7H9gmabq5FMgAhl4uQBnYAXwpu65AGdgBfCm7gumEROR-C1PLXwv1PT9ZaPGRYndCrCdUNkfxQIAruKg&_nc_ohc=_eJ8xHS3-l4AX_bOgX3&_nc_ht=scontent.fnbo1-1.fna&tp=27&oh=873270e2b48a46307567fef4ffda4d64&oe=60017D8D"
        title="Alpha Nganga"
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
