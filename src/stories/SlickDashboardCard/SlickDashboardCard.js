import React from 'react';
import './SlickDashboardCard.css';

export const SlickDashboardCard = ({ title, ...props }) => {
  return (
    <div className="slick-dashboard-card-container">
      <div className="slick-dashboard-title" data-testid="slick-dashboard-title">
        {title}
      </div>
      <div className="slick-dashboard-body">{props.children}</div>
    </div>
  );
};
