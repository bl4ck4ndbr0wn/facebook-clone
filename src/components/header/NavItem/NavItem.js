import {Avatar, IconButton} from '@material-ui/core';
import React, {useState} from 'react';

function NavItem({Icon, children}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      {Icon && <IconButton className="icon-button" onClick={() => setOpen(!open)}>
        <Icon/>
      </IconButton>}

      {open && children}
    </li>
  );
}

export default NavItem;
