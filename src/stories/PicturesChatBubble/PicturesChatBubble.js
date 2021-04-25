import React from 'react';
import ChatBoxContainer from './ChatBoxContainer';
import MultiplePicturesChatBubble from './MultiplePicturesChatBubble';
import SinglePictureChatBubble from './SinglePictureChatBubble';

const getChatConfiguration = (pictures) => {
  const { length } = pictures;

  if (length === 1)
    return <SinglePictureChatBubble picture={pictures[0]} />;
  if (length > 1) {
    return <MultiplePicturesChatBubble pictures={pictures} />;
  }
  return <div />;
};

const PicturesChatBubble = ({ pictures }) => {
  return (
    <>
      <ChatBoxContainer>
        {getChatConfiguration(pictures)}
      </ChatBoxContainer>
    </>
  );
};

export default PicturesChatBubble;
