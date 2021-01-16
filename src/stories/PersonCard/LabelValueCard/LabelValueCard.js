import React from 'react';
import './LabelValueCard.css';

export const LabelValueCard = ({ label = '', value = '', important = false }) => {
  return (
    <div className="label-card-value-container">
      <div className="label-card-value-label">{label}</div>
      <div className={`label-card-value-value ${important ? 'label-card-value-important' : ''}`}>{value}</div>
    </div>
  );
};
