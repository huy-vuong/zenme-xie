import { render } from '@testing-library/react';
import React from 'react';
import PinyinList from 'zenme-xie/components/PinyinList';

test('renders each of the given pinyin', () => {
  const pinyinList = ['māo', 'miāo'];
  const { getByText, asFragment } = render(
    <PinyinList id="test" pinyinList={pinyinList} />
  );
  pinyinList.forEach((text) => getByText(text));
  expect(asFragment()).toMatchSnapshot();
});

test('renders nothing given no pinyin', () => {
  const { asFragment } = render(<PinyinList id="test" pinyinList={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
