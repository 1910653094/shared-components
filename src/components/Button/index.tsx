import React from 'react';

// -------------------------------------

type TProps = {
    children?: React.ReactNode;
}

// -------------------------------------

export function Button({ children }: TProps) {
    return (
        <button>{children}</button>
    );
}
