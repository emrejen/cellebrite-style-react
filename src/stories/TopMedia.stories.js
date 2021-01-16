import React from 'react';
import { TopMedia } from './TopMedia/TopMedia';

const element = {
  title: 'Components/TopMedia',
  component: TopMedia,
};

export const Single = () => {
  return (
    <div>
      <TopMedia title="Weapons" value={23} onClick={() => alert('Clicked')} />
    </div>
  );
};

export const Multiple = () => {
  return (
    <div>
      <TopMedia title="Category-that-does-not-exist" value={23} />
      <TopMedia title="faces" value={23} />
      <TopMedia title="hand Holding Objects" value={23} />
      <TopMedia title="jewelry" value={23} />
      <TopMedia title="smartphone" value={23} />
    </div>
  );
};

export default element;
