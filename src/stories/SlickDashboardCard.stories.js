import React from 'react';
import { SlickDashboardCard } from './SlickDashboardCard/SlickDashboardCard';

const element = {
  title: 'Components/SlickDashboardCard',
  component: SlickDashboardCard,
};

export const Single = () => {
  return (
    <div>
      <SlickDashboardCard title="10 Last visited sites">
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
      </SlickDashboardCard>
    </div>
  );
};

export default element;
