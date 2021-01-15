import React from 'react';

import { DashboardCard } from './DashboardCard/DashboardCard';
import { VBarChart } from './VBarChart/VBarChart';

const element = {
  title: 'Components/VBarChart',
  component: VBarChart,
};

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const dataset = [
  { title: 'English', value: randomInt(1, 2000) },
  { title: 'Romanian', value: randomInt(1, 2000) },
  { title: 'French', value: randomInt(1, 2000) },
  { title: 'Spanish', value: randomInt(1, 2000) },
  { title: 'Africans', value: randomInt(1, 2000) },
  { title: 'Korean', value: randomInt(1, 2000) },
  { title: 'Italian', value: randomInt(1, 2000) },
  { title: 'Turkish', value: randomInt(1, 2000) },
  { title: 'Dutch', value: randomInt(1, 2000) },
  { title: 'Thai', value: randomInt(1, 2000) },
];

export const Simple = () => (
  <DashboardCard title="Languages" action={() => alert('Do it')}>
    <VBarChart dataset={dataset} />
  </DashboardCard>
);

export default element;
