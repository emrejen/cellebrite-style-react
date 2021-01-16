import React from 'react';

import { PersonCard } from './PersonCard/PersonCard';

const element = {
  title: 'Components/PersonCard',
  component: PersonCard,
};

const person = {
  title: 'Party',
  mainTitle: '+12017016271',
  subTitle: 'w1ll.1k',
  owner: 'Juan Mortyme',
};
const actions = [
  { label: 'Edit', execute: () => alert(`Edit: ${person.title}`) },
  { label: 'Merge', execute: () => alert(`Merge: ${person.title}`) },
  { label: 'Transfer identifier', execute: () => alert(`Transfer identifier for: ${person.title}`) },
];

export const Single = () => {
  return <PersonCard person={person} actions={actions} />;
};

export const Multiple = () => {
  const list = new Array(10).fill(<PersonCard person={person} actions={actions} />);
  return list;
};

export default element;
