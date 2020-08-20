import { render } from '@testing-library/react';
import React from 'react';
import HanziCardList from 'zenme-xie/components/HanziCardList';

test('renders nothing given empty text', async () => {
  const { asFragment } = render(<HanziCardList text="" />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders cards for each of the given characters', async () => {
  const { getByTestId } = render(<HanziCardList text="貓咪喵喵叫" />);
  getByTestId('hanzi-card-0-35987');
  getByTestId('hanzi-card-1-21674');
  getByTestId('hanzi-card-2-21941');
  getByTestId('hanzi-card-3-21941');
  getByTestId('hanzi-card-4-21483');
});

test('renders cards even for non-Hanzi characters', async () => {
  const { getByTestId } = render(<HanziCardList text="Nyan?" />);
  getByTestId('hanzi-card-0-78');
  getByTestId('hanzi-card-1-121');
  getByTestId('hanzi-card-2-97');
  getByTestId('hanzi-card-3-110');
  getByTestId('hanzi-card-4-63');
});
