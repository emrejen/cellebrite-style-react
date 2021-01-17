import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { SlickDashboardCard } from './SlickDashboardCard';

describe('SlickDashboardCard test suite', () => {
  it('renders the element with the correct given data', () => {
    render(<SlickDashboardCard title="this is my title" />);
    expect(screen.getByTestId('slick-dashboard-title')).toHaveTextContent('this is my title');
  });
});
