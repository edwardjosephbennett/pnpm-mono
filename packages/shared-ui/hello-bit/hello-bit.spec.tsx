import React from 'react';
import { render } from '@testing-library/react';
import { BasicHelloBit } from './hello-bit.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicHelloBit />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
