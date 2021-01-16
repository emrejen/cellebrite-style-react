import React from 'react';
import PropTypes from 'prop-types';
import weapons from '../assets/weapons.jpg';
import uncategorized from '../assets/uncategorized.jpg';
import faces from '../assets/faces.jpg';
import handHoldObject from '../assets/hand-hold-object.svg';
import jewelry from '../assets/jewelry.svg';
import smartphone from '../assets/smartphone.svg';
import './TopMedia.css';

const categories = new Map([
  ['weapons', weapons],
  ['uncategorized', uncategorized],
  ['faces', faces],
  ['handHoldObject', handHoldObject],
  ['jewelry', jewelry],
  ['smartphone', smartphone],
]);

export const TopMedia = ({ title = 'N/A', value = 0, ...props }) => {
  const getSrcBy = title => (categories.has(title.toLowerCase()) ? categories.get(title.toLowerCase()) : uncategorized);
  const ellipsis = (value, max) => (value.length > max ? `${value.substring(0, max)}...` : value);
  return (
    <div className="top-media-container" onClick={typeof (props.onClick === 'function') ? props.onClick : null}>
      <div>
        <img src={getSrcBy(title)} alt={title} data-testid="top-media-icon" />
      </div>
      <div className="top-media-bottom">
        <div className="top-media-title" data-testid="top-media-title">
          {ellipsis(title, 19)}
        </div>
        <div className="top-media-value" data-testid="top-media-value">
          {value}
        </div>
      </div>
    </div>
  );
};

TopMedia.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};
