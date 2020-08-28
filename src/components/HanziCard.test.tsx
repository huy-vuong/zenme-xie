import { render } from '@testing-library/react';
import React from 'react';
import HanziCard from 'zenme-xie/components/HanziCard';

const dictionaryEntry = {
  character: '貓',
  definition: 'cat',
  pinyin: ['māo'],
};

test('renders a card with the given character printed', () => {
  const { getByText } = render(
    <HanziCard character="貓" index={0} dictionaryEntry={dictionaryEntry} />
  );
  getByText('貓');
});

test('renders a card with its ordinal number', () => {
  const { getByText } = render(
    <HanziCard character="貓" index={0} dictionaryEntry={dictionaryEntry} />
  );
  getByText('1');
});

test('renders a card containing the character in a rice grid', () => {
  const { asFragment } = render(
    <HanziCard character="貓" index={0} dictionaryEntry={dictionaryEntry} />
  );
  expect(asFragment()).toMatchSnapshot();
});
