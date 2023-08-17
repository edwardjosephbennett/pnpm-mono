import React from 'react';
import { HelloBit } from './hello-bit';

export const BasicHelloBit = () => {
  return (
    <HelloBit>hello world!</HelloBit>
  );
}

export const NameHelloBit = () => {
  return (
      <HelloBit name={"Ed"}>Hello </HelloBit>
  )
}
