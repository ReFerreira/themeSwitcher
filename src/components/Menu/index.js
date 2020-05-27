import React from 'react';
import { FaHome, FaWhatsapp } from 'react-icons/fa';
import { MdExitToApp, MdLink } from 'react-icons/md';

import { SideBar } from './styles';

function Menu() {
  return (
    <SideBar>
      <ul>
        <li>
          <div>
            <FaHome size="1.5rem" />
            <span>Home</span>
          </div>
        </li>
        <li>
          <div>
            <FaWhatsapp size="1.5rem" />
            <span>WhatsApp</span>
          </div>
        </li>
        <li>
          <div>
            <MdLink size="1.5rem" />
            <span>Portfolio</span>
          </div>
        </li>
        <li>
          <div>
            <MdExitToApp size="1.5rem" />
            <span> SignOut </span>
          </div>
        </li>
      </ul>
    </SideBar>
  );
}

export default Menu;
