import React from 'react';
import faker from 'faker';
import { WebHistoryItem } from './WebHistoryItem/WebHistoryItem';

const element = {
  title: 'Components/WebHistoryItem',
  component: WebHistoryItem,
};

export const One = () => (
  <div>
    <WebHistoryItem url="https://www.cellebrite.com" date="Aug 14, 2020, 5:22:51 PM UTC (0)" />
  </div>
);

export const Several = () => {
  const list = [];
  for (let i = 0; i < 10; ++i) {
    list.push({ url: faker.internet.url(), date: faker.date.past() });
  }
  return (
    <>
      {list.map(item => (
        <WebHistoryItem url={item.url} date={`${item.date} (0)`} />
      ))}
    </>
  );
};

export default element;
