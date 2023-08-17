import React, { ReactNode } from 'react';

export type GoodbyeBitProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function GoodbyeBit({ children }: GoodbyeBitProps) {
  return (
    <div>
      {children}
    </div>
  );
}
