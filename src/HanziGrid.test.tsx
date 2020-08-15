import { render, waitFor } from '@testing-library/react';
import React from 'react';
import HanziGrid from 'zenme-xie/HanziGrid';

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('renders the Hanzi strokes for a Hanzi character', async () => {
  const { container, asFragment } = render(
    <HanziGrid character="貓" id="test" animateOnClick={true} />
  );
  await waitFor(
    () => {
      const gElements = container.querySelectorAll('g');
      expect(gElements).toHaveLength(4);
    },
    { container }
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders an empty rice grid for a non-Hanzi character', async () => {
  const { container, asFragment } = render(
    <HanziGrid character="H" id="test" animateOnClick={true} />
  );
  const initialRender = asFragment();
  await sleep(100);
  const gElement = container.querySelector('g');
  expect(gElement).toBeNull();
  expect(initialRender).toMatchSnapshot(asFragment());
  expect(initialRender).toMatchSnapshot();
});
