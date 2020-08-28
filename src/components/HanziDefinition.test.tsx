import { render } from '@testing-library/react';
import React from 'react';
import HanziDefinition from 'zenme-xie/components/HanziDefinition';

test('renders the given definition', () => {
  const definition = 'kittykat';
  const { getByText, asFragment } = render(
    <HanziDefinition definition={definition} />
  );
  getByText(definition);
  expect(asFragment()).toMatchSnapshot();
});

test('renders nothing given no pinyin', () => {
  const { asFragment } = render(<HanziDefinition />);
  expect(asFragment()).toMatchSnapshot();
});
