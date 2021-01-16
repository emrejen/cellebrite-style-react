import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ImageIcon from '@material-ui/icons/Image';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LanguageIcon from '@material-ui/icons/Language';

import './SideBar.css';

const items = [
  { text: 'Dashboard', icon: <ViewModuleIcon /> },
  { text: 'Timeline', icon: <FormatListBulletedIcon /> },
  { text: 'Chats', icon: <ModeCommentIcon /> },
  { text: 'Emails', icon: <MailOutlineIcon /> },
  { text: 'Media', icon: <ImageIcon /> },
  { text: 'Locations', icon: <LocationOnIcon /> },
  { text: 'Persons', icon: <SupervisedUserCircleIcon /> },
  { text: 'Calendar', icon: <DateRangeIcon /> },
  { text: 'Web history', icon: <LanguageIcon /> },
];

export const SideBar = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectItem = event => {
    setSelectedId(event.currentTarget.id);
  };
  return (
    <div className="side-bar-item-container">
      {items.map(item => {
        return (
          <div
            className={`side-bar-item ${selectedId === item.text ? 'side-bar-item-selected' : ''}`}
            onClick={selectItem}
            id={item.text}
            key={item.text}>
            <div className="side-bar-icon">{item.icon}</div>
            <div className="side-bar-text">{item.text}</div>
          </div>
        );
      })}
      <Divider light={true} />
      <div>
        <div className={`side-bar-item`}>
          <div className="side-bar-text">Report builder</div>
        </div>
      </div>
    </div>
  );
};
