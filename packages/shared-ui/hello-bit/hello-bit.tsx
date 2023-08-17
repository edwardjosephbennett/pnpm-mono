import React, { ReactNode } from 'react';
import {GoodbyeBit} from "@shared-ui/goodbye-bit";

export type HelloBitProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  name: string;
};

export function HelloBit({ children, name }: HelloBitProps) {
  return (
    <div>
      {children}
      {name}
      <GoodbyeBit>Goodbye</GoodbyeBit>
    </div>
  );
}

