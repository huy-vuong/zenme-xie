import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import App from 'zenme-xie/components/App';

test('renders app title', () => {
  const { getByText } = render(<App />);
  expect(getByText('怎麼寫')).toBeInTheDocument();
});

test('renders cards based on the given text', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<App />);
  const textInput = getByPlaceholderText('你想寫什麼？');
  expect(textInput).toHaveDisplayValue('貓咪喵喵叫');
  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('2')).toBeInTheDocument();
  expect(getByText('3')).toBeInTheDocument();
  expect(getByText('4')).toBeInTheDocument();
  expect(getByText('5')).toBeInTheDocument();
  fireEvent.change(textInput, { target: { value: '嗯' } });
  expect(textInput).toHaveDisplayValue('嗯');
  expect(getByText('1')).toBeInTheDocument();
  expect(queryByText('2')).not.toBeInTheDocument();
  expect(queryByText('3')).not.toBeInTheDocument();
  expect(queryByText('4')).not.toBeInTheDocument();
  expect(queryByText('5')).not.toBeInTheDocument();
});
