import React, { ReactNode } from 'react';

// ------------------------------

type TProps = {
  children?: ReactNode;
};

// ------------------------------

export function Button({ children }: TProps) {
  return <button type="button">{children}</button>;
}
