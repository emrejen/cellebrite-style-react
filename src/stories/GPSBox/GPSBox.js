import React from 'react';
import PropTypes from 'prop-types';

import './GPSBox.css';

export const GPSBox = ({ selected = false, gps = '', visits = 0 }) => {
  return (
    <div className={`gps-box ${selected ? 'gps-box-selected' : ''}`}>
      <div className="same-row align-middle">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29">
            <g fill="none" fill-rule="evenodd">
              <circle cx="14" cy="14.5" r="14" fill="#499AE5" stroke="#499AE5" stroke-width=".5" />
              <path
                fill="#FFF"
                d="M18.5 11.495C18.5 15.107 14 22 14 22s-4.5-6.893-4.5-10.505C9.5 8.888 11.515 7 14 7s4.5 1.888 4.5 4.495zm-1.8.192c0-1.553-1.209-2.812-2.7-2.812s-2.7 1.26-2.7 2.813c0 1.553 1.209 2.812 2.7 2.812s2.7-1.26 2.7-2.813z"
              />
            </g>
          </svg>
        </div>
        <div className="pad-left-10">
          <div className="gps-data">{gps}</div>
          <div className="gps-data gps-visits">{visits} visits</div>
        </div>
      </div>
    </div>
  );
};

GPSBox.propTypes = {
  selected: PropTypes.bool,
  gps: PropTypes.string.isRequired,
  visits: PropTypes.number.isRequired,
};
