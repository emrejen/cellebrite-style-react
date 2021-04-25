import React from 'react';
import PicturesChatBubble from './PicturesChatBubble/PicturesChatBubble';

const element = {
  title: 'Components/PicturesChatBubble',
  component: PicturesChatBubble,
};

const list1 = [
  'https://images.unsplash.com/photo-1518728242875-50600dfbe31a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGlzcmFlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];

const list2 = [
  ...list1,
  'https://images.unsplash.com/photo-1542743408-218cc173cda0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXNyYWVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];
const list3 = [
  ...list2,
  'https://images.unsplash.com/photo-1554401922-3ac1c68b2715?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXNyYWVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];
const list4 = [
  ...list3,
  'https://images.unsplash.com/photo-1529066516367-36973222c957?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGlzcmFlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];

const list6 = [
  ...list4,
  'https://images.unsplash.com/photo-1529066516367-36973222c957?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGlzcmFlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fA==&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];

const list7 = [
  ...list4,
  ...list4,
  ...list4,
  ...list4,
  ...list4,
  ...list4,
  ...list4,
  ...list4,
  ...list4,
  ...list4,
  'https://images.unsplash.com/photo-1529066516367-36973222c957?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGlzcmFlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fA==&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];

export const One = () => (
  <>
    <PicturesChatBubble pictures={list1} />
  </>
);

export const Two = () => (
  <>
    <PicturesChatBubble pictures={list2} />
  </>
);

export const Three = () => (
  <>
    <PicturesChatBubble pictures={list3} />
  </>
);

export const Four = () => (
  <>
    <PicturesChatBubble pictures={list4} />
  </>
);

export const Six = () => (
  <>
    <PicturesChatBubble pictures={list6} />
  </>
);

export const Alot = () => (
  <>
    <PicturesChatBubble pictures={list7} />
  </>
);

export default element;
