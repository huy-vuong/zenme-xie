import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import HanziTextInput from 'zenme-xie/components/HanziTextInput';

test('renders the given text', () => {
  const { getByDisplayValue, asFragment } = render(
    <HanziTextInput text="貓咪喵喵叫" setText={() => {}} />
  );
  getByDisplayValue('貓咪喵喵叫');
  expect(asFragment()).toMatchSnapshot();
});

test('converts the given text to Simplified when S is clicked', () => {
  const state = {
    text: '貓咪喵喵叫',
  };
  const { getByDisplayValue, getByText } = render(
    <HanziTextInput
      text={state.text}
      setText={(text) => {
        state.text = text;
      }}
    />
  );
  getByDisplayValue('貓咪喵喵叫');
  fireEvent.click(getByText('S'));
  expect(state.text).toBe('猫咪喵喵叫');
});

test('converts the given text to Traditional when T is clicked', () => {
  const state = {
    text: '猫咪喵喵叫',
  };
  const { getByDisplayValue, getByText } = render(
    <HanziTextInput
      text={state.text}
      setText={(text) => {
        state.text = text;
      }}
    />
  );
  getByDisplayValue('猫咪喵喵叫');
  fireEvent.click(getByText('T'));
  expect(state.text).toBe('貓咪喵喵叫');
});
