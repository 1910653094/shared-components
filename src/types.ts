import { ReactNode } from 'react';

export type TWithChildren<T> = {
  readonly children: ReactNode;
} & T;
