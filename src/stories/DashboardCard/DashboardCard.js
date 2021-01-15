import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './DashboardCard.css';

export const DashboardCard = ({ title = '', action = null, children, ...props }) => {
  return (
    <div className="box">
      <div className="box-title-container">
        <div className="box-title">{title}</div>
        <div className="box-title-icon">{typeof action === 'function' ? <FontAwesomeIcon icon={faDownload} onClick={action} /> : ''}</div>
      </div>
      <div className="box-title-separator" />
      <div className="box-body">{children}</div>
    </div>
  );
};

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func,
  children: PropTypes.element,
};
