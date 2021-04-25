import React from 'react';

const SinglePictureChatBubble = ({ picture }) => {
  return (
    <img
      src={picture}
      alt={picture}
      className="chat-picture-single"
    />
  );
};

export default SinglePictureChatBubble;
