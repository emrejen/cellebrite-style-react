import React from 'react';
import PropTypes from 'prop-types';
import './VBarChart.css';

const compare = (item0, item1) => {
  if (item0.value < item1.value) {
    return 1;
  }
  if (item0.value > item1.value) {
    return -1;
  }
  return 0;
};

export const VBarChart = ({ dataset = [], ...props }) => {
  const sorted = dataset.sort(compare);
  const calculateWidthOfBar = value => {
    return `${(value * 100) / biggestValue}%`;
  };
  const biggestValue = sorted.reduce((acc, value) => {
    acc = value.value > acc ? value.value : acc;
    return acc;
  }, 0);

  return (
    <div className="vbar-chart-container">
      {sorted.map(item => (
        <div className="vbar-chart-item-container" key={`${item.title}-${item.value}`}>
          <div className="vbar-chart-item-title">
            <div>{item.title}</div>
            <div>{item.value}</div>
          </div>
          <div className="vbar-chart-item-value" style={{ width: calculateWidthOfBar(item.value) }}>
            &nbsp;
          </div>
        </div>
      ))}
    </div>
  );
};

VBarChart.propTypes = {
  dataset: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};
