import React from 'react';
import { SideBar } from './SideBar/SideBar';

const element = {
  title: 'Components/SideBar',
  component: SideBar,
};

export const Simple = () => {
  return (
    <>
      <SideBar />
    </>
  );
};

export default element;
