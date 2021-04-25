import React from 'react';

const PicturesLeftIndicator = ({ value }) => {
  return (
    <div className="chat-picture-left-counter-box">
      <div className="chat-picture-left-counter">+{value}</div>
    </div>
  );
};

export default PicturesLeftIndicator;
