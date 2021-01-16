import React from 'react';
import { Facebook } from './Icons/Facebook';
import { SearchBoxItem } from './SearchBoxItem/SearchBoxItem';

const element = {
  title: 'Components/SearchBoxItem',
  component: SearchBoxItem,
};

export const Simple = () => {
  return (
    <div>
      <SearchBoxItem name="Facebook" icon={<Facebook />} />
    </div>
  );
};

export default element;
