import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { TopMedia } from './TopMedia';

describe('TopMedia test suite', () => {
  it('renders the element with the correct given data', () => {
    const { unmount } = render(<TopMedia title="Cellebrite" value={0} />);
    expect(screen.getByTestId('top-media-title')).toHaveTextContent('Cellebrite');
    expect(screen.getByTestId('top-media-value')).toHaveTextContent('0');
    unmount();
    render(<TopMedia title="Cellebrite" value={10} />);
    expect(screen.getByTestId('top-media-value')).toHaveTextContent('10');
  });

  it('should show the generic image when it does not recognize the given category', () => {
    render(<TopMedia title="this_does_not_exists" value={0} />);
    expect(screen.getByTestId('top-media-icon').src.endsWith('uncategorized.jpg')).toBe(true);
  });

  it('should see the correct icon per category no matter the case', () => {
    let { unmount } = render(<TopMedia title="weapons" value={0} />);
    expect(screen.getByTestId('top-media-icon').src.endsWith('weapons.jpg')).toBe(true);
    unmount();
    render(<TopMedia title="Weapons" value={0} />);
    expect(screen.getByTestId('top-media-icon').src.endsWith('weapons.jpg')).toBe(true);
  });
});
