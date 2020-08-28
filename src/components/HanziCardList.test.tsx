import { render, waitFor } from '@testing-library/react';
import React from 'react';
import HanziCardList from 'zenme-xie/components/HanziCardList';
import HanziDictionaryEntry from 'zenme-xie/types/HanziDictionaryEntry';

test('renders nothing given empty text', () => {
  const { asFragment } = render(
    <HanziCardList text="" dictionary={new Map()} />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders cards for each of the given characters', () => {
  const dictionary = new Map<string, HanziDictionaryEntry>([
    [
      '貓',
      {
        character: '貓',
        definition: 'cat',
        pinyin: ['māo'],
      },
    ],
    [
      '咪',
      {
        character: '咪',
        definition: "a cat's meow; a meter",
        pinyin: ['mī'],
      },
    ],
    [
      '喵',
      {
        character: '喵',
        definition: "a cat's meow",
        pinyin: ['miāo'],
      },
    ],
    [
      '叫',
      {
        character: '叫',
        definition: 'cry, shout; to call, to greet, to hail',
        pinyin: ['jiào'],
      },
    ],
  ]);
  const { getByTestId } = render(
    <HanziCardList text="貓咪喵喵叫" dictionary={dictionary} />
  );
  waitFor(() => {
    getByTestId('hanzi-card-0-35987');
    getByTestId('hanzi-card-1-21674');
    getByTestId('hanzi-card-2-21941');
    getByTestId('hanzi-card-3-21941');
    getByTestId('hanzi-card-4-21483');
  });
});

test('renders cards even for non-Hanzi characters', () => {
  const { getByTestId } = render(
    <HanziCardList text="Nyan?" dictionary={new Map()} />
  );
  waitFor(() => {
    getByTestId('hanzi-card-0-78');
    getByTestId('hanzi-card-1-121');
    getByTestId('hanzi-card-2-97');
    getByTestId('hanzi-card-3-110');
    getByTestId('hanzi-card-4-63');
  });
});
