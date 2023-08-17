import React from 'react';
import { render } from '@testing-library/react';
import { BasicGoodbyeBit } from './goodbye-bit.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicGoodbyeBit />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
