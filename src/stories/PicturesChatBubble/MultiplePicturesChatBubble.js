import React from 'react';
import PicturesLeftIndicator from './PicturesLeftIndicator';

const MultiplePicturesChatBubble = ({ pictures }) => {
  let list = [...pictures];
  const UPPER_LIMIT = 4;
  const left = list.length - UPPER_LIMIT;
  if (list.length > UPPER_LIMIT) {
    list = list.slice(0, UPPER_LIMIT);
  }

  return (
    <>
      <div
        style={{ display: 'flex', width: '296px', flexWrap: 'wrap' }}
      >
        {list.map((picture) => (
          <img
            key={picture}
            src={picture}
            alt={picture}
            className="chat-picture-as-thumbnail"
          />
        ))}
      </div>
      {left > 0 ? <PicturesLeftIndicator value={left} /> : null}
    </>
  );
};

export default MultiplePicturesChatBubble;
