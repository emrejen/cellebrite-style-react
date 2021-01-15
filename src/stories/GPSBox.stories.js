import React from 'react';
import { GPSBox } from './GPSBox/GPSBox';

const element = {
  title: 'Components/GPSBox',
  component: GPSBox,
};

export const Simple = () => {
  return (
    <div>
      <GPSBox gps="48.70339,-122.90296" visits={73644} />
      <br />
      <br />
      <GPSBox selected={true} />
    </div>
  );
};

export default element;
