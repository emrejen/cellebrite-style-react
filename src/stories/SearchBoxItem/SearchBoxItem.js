import React from 'react';
import './SearchBoxItem.css';

export const SearchBoxItem = ({ icon, name }) => {
  return (
    <div className="search-box-container">
      <div>{icon}</div>
      <div className="search-box-name">{name}</div>
    </div>
  );
};
