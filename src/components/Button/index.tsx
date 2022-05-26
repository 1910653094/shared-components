import React, { ReactNode } from 'react';

// ------------------------------

type TProps = {
    children?: ReactNode;
}

// ------------------------------

export const Button = ({ children }: TProps) => (
    <button>{children}</button>
);
