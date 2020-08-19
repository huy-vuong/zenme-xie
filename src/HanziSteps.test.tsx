import { render, waitFor } from '@testing-library/react';
import React from 'react';
import HanziSteps from 'zenme-xie/HanziSteps';

test('renders steps for the given character', async () => {
  const { container, getByTestId, asFragment } = render(
    <HanziSteps character="貓" id="test" />
  );
  await waitFor(
    () => {
      getByTestId('test-stroke-0');
      getByTestId('test-stroke-1');
      getByTestId('test-stroke-2');
      getByTestId('test-stroke-3');
      getByTestId('test-stroke-4');
      getByTestId('test-stroke-5');
      getByTestId('test-stroke-6');
      getByTestId('test-stroke-7');
      getByTestId('test-stroke-8');
      getByTestId('test-stroke-9');
      getByTestId('test-stroke-10');
      getByTestId('test-stroke-11');
      getByTestId('test-stroke-12');
      getByTestId('test-stroke-13');
      getByTestId('test-stroke-14');
      getByTestId('test-stroke-15');
    },
    { container }
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders steps only for the first of the given characters', async () => {
  const { container, getByTestId, asFragment } = render(
    <HanziSteps character="貓咪" id="test" />
  );
  await waitFor(
    () => {
      getByTestId('test-stroke-0');
      getByTestId('test-stroke-1');
      getByTestId('test-stroke-2');
      getByTestId('test-stroke-3');
      getByTestId('test-stroke-4');
      getByTestId('test-stroke-5');
      getByTestId('test-stroke-6');
      getByTestId('test-stroke-7');
      getByTestId('test-stroke-8');
      getByTestId('test-stroke-9');
      getByTestId('test-stroke-10');
      getByTestId('test-stroke-11');
      getByTestId('test-stroke-12');
      getByTestId('test-stroke-13');
      getByTestId('test-stroke-14');
      getByTestId('test-stroke-15');
    },
    { container }
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders nothing given a non-Hanzi character', () => {
  const { asFragment } = render(<HanziSteps character="@" id="test" />);
  expect(asFragment()).toMatchSnapshot();
});
