import { render } from '@testing-library/react';
import React from 'react';
import RiceGrid from './RiceGrid';

test('renders the lines for the rice grid', () => {
  const { getByTestId, asFragment } = render(<RiceGrid id="test" />);
  [
    'rice-grid-border-nw-ne',
    'rice-grid-border-nw-sw',
    'rice-grid-border-ne-se',
    'rice-grid-border-sw-se',
    'rice-grid-guide-nw-se',
    'rice-grid-guide-ne-sw',
    'rice-grid-guide-nn-ss',
    'rice-grid-guide-ww-ee',
  ].forEach((testId) => getByTestId(testId));
  expect(asFragment()).toMatchSnapshot();
});
