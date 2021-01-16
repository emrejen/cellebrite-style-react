import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertOutlineIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './PersonCard.css';
import { LabelValueCard } from './LabelValueCard/LabelValueCard';

export const PersonCard = ({ person, actions = [] }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const showMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const hideMenu = () => {
    setAnchorEl(null);
  };
  return (
    <div className="person-card-container">
      <div className="person-card-header">
        <div className="person-card-user-icon"></div>
        <div className="person-card-user-meta same-row" style={{ justifyContent: 'space-between', width: '70%' }}>
          <div>
            <div className="person-card-title">{person.title}</div>
            <div className="person-card-main-title">{person.mainTitle}</div>
            <div className="person-card-main-sub-title">{person.subTitle}</div>
          </div>
          <div>
            {actions.length > 0 ? (
              <>
                <IconButton>
                  <MoreVertOutlineIcon fontSize="small" style={{ color: '#ffffff' }} onClick={showMenu} />
                </IconButton>
                <Menu id="menu-id" keepMounted anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={hideMenu}>
                  {actions.map(single => (
                    <MenuItem key={single.label} onClick={single.execute}>
                      {single.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <div className="person-card-body">
        <LabelValueCard label="Owner" value={person.owner} important={true} />
        <LabelValueCard label="Title" value={person.key || 'None'} />
        <LabelValueCard label="Address" value={person.address || 'None'} />
      </div>
    </div>
  );
};
